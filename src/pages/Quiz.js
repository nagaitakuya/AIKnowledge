import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, XCircle, RotateCcw, Award, ArrowRight, Star, Trophy } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      question: "AIという用語が初めて使われたのはいつでしょうか？",
      options: [
        "1950年のチューリングテスト",
        "1956年のダートマス会議",
        "1980年代のエキスパートシステム",
        "2010年代のディープラーニング"
      ],
      correct: 1,
      explanation: "1956年のダートマス会議で、ジョン・マッカーシーらが「人工知能」という用語を初めて使用しました。これがAI分野の正式な始まりとされています。"
    },
    {
      question: "現在実用化されているAIの大部分はどのタイプでしょうか？",
      options: [
        "弱いAI（Narrow AI）",
        "強いAI（AGI）",
        "超知能（ASI）",
        "汎用AI"
      ],
      correct: 0,
      explanation: "現在実用化されているAIのほとんどは、特定の分野に特化した「弱いAI（Narrow AI）」です。画像認識、音声認識、翻訳などがこれに該当します。"
    },
    {
      question: "生成AIの多くが基盤とする技術はどれでしょうか？",
      options: [
        "ニューラルネットワーク",
        "Transformer",
        "決定木",
        "サポートベクターマシン"
      ],
      correct: 1,
      explanation: "ChatGPTやGPT-4などの現在の生成AIの多くは「Transformer」というアーキテクチャを基盤としています。Attention機構により効率的な処理を実現しています。"
    },
    {
      question: "AGIとは何の略でしょうか？",
      options: [
        "Advanced General Intelligence",
        "Artificial General Intelligence",
        "Automated General Intelligence",
        "Augmented General Intelligence"
      ],
      correct: 1,
      explanation: "AGIは「Artificial General Intelligence（汎用人工知能）」の略です。人間と同等レベルの知能を持ち、様々な分野で柔軟に思考・学習できるAIを指します。"
    },
    {
      question: "機械学習の手法で、正解データを使って学習するものはどれでしょうか？",
      options: [
        "教師なし学習",
        "強化学習",
        "教師あり学習",
        "自己学習"
      ],
      correct: 2,
      explanation: "教師あり学習は、入力データと対応する正解データ（ラベル）を使ってモデルを学習させる手法です。画像分類やスパム検出などに使用されます。"
    },
    {
      question: "Deep Blueがカスパロフにチェスで勝利したのはいつでしょうか？",
      options: [
        "1987年",
        "1997年",
        "2007年",
        "2017年"
      ],
      correct: 1,
      explanation: "IBMのDeep Blueが世界チェス王者ガルリ・カスパロフを破ったのは1997年です。これはAIが人間を特定分野で上回った象徴的な出来事でした。"
    },
    {
      question: "ASI（超知能）の最も大きな特徴は何でしょうか？",
      options: [
        "人間と同等の知能",
        "特定分野での優秀性",
        "人間を大幅に上回る知能",
        "感情を持つこと"
      ],
      correct: 2,
      explanation: "ASI（Artificial Super Intelligence）は人間の知能を大幅に上回る人工知能です。現在想像できない能力を持つ可能性があります。"
    },
    {
      question: "第3次AIブームの特徴はどれでしょうか？",
      options: [
        "推論・探索",
        "知識表現",
        "機械学習・深層学習",
        "量子コンピューティング"
      ],
      correct: 2,
      explanation: "第3次AIブーム（2010年代〜現在）の特徴は機械学習・深層学習です。データから学習し、人間を超える性能を実現しています。"
    },
    {
      question: "生成AIが得意ではない分野はどれでしょうか？",
      options: [
        "テキスト生成",
        "画像生成",
        "感情理解",
        "音楽生成"
      ],
      correct: 2,
      explanation: "現在の生成AIは感情理解が苦手とされています。人間の感情を完全に理解し、適切に対応することは現在のAIにとって大きな課題です。"
    },
    {
      question: "シンギュラリティ（技術的特異点）について正しいのはどれでしょうか？",
      options: [
        "AIが人間の知能を超えた時点",
        "技術進歩が予測不可能になる転換点",
        "人類の文明が根本的に変化する可能性",
        "上記すべて"
      ],
      correct: 3,
      explanation: "シンギュラリティは、AIが人間の知能を超えた時点で技術進歩が加速し、人類には予測不可能な変化が起こるとされる転換点です。文明の根本的変化も含みます。"
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const correct = selectedAnswer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowResult(true);
    setShowExplanation(true);
    
    const newAnswer = {
      question: currentQuestion,
      selected: selectedAnswer,
      correct: questions[currentQuestion].correct,
      isCorrect: correct
    };
    setAnswers([...answers, newAnswer]);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      // Save score to localStorage
      const finalScore = score + (isCorrect ? 1 : 0);
      localStorage.setItem('aiQuizScore', finalScore);
      localStorage.setItem('aiQuizDate', new Date().toISOString());
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setShowExplanation(false);
    setIsCorrect(false);
  };

  const getScoreMessage = () => {
    const finalScore = score + (isCorrect ? 1 : 0);
    if (finalScore >= 9) return "素晴らしい！AIエキスパートです！";
    if (finalScore >= 7) return "よくできました！AIの知識がしっかりしています。";
    if (finalScore >= 5) return "まずまずです。もう少し学習してみましょう。";
    return "もう一度学習して、チャレンジしてみてください！";
  };

  const getScoreColor = () => {
    const finalScore = score + (isCorrect ? 1 : 0);
    if (finalScore >= 9) return "text-green-600";
    if (finalScore >= 7) return "text-blue-600";
    if (finalScore >= 5) return "text-yellow-600";
    return "text-red-600";
  };

  if (quizCompleted) {
    const finalScore = score + (isCorrect ? 1 : 0);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">クイズ完了！</h1>
              <div className="text-6xl font-bold mb-4">
                <span className={getScoreColor()}>{finalScore}</span>
                <span className="text-gray-400">/{questions.length}</span>
              </div>
              <p className={`text-xl font-medium mb-6 ${getScoreColor()}`}>
                {getScoreMessage()}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">正解した問題</h3>
                <div className="space-y-2">
                  {answers.map((answer, index) => (
                    answer.isCorrect && (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700">問題 {index + 1}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">間違えた問題</h3>
                <div className="space-y-2">
                  {answers.map((answer, index) => (
                    !answer.isCorrect && (
                      <div key={index} className="flex items-center space-x-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-700">問題 {index + 1}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>もう一度挑戦</span>
              </button>
              <Link
                to="/"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>ホームに戻る</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-ai-blue to-ai-purple text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIクイズチャレンジ
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              学習した内容を確認しましょう
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">問題 {currentQuestion + 1} / {questions.length}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm">スコア: {score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 h-2">
        <div 
          className="bg-gradient-to-r from-ai-blue to-ai-purple h-2 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {currentQuestion + 1}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {questions[currentQuestion].question}
                </h2>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 quiz-option ${
                    selectedAnswer === index 
                      ? showResult 
                        ? index === questions[currentQuestion].correct 
                          ? 'correct' 
                          : 'incorrect'
                        : 'selected'
                      : showResult && index === questions[currentQuestion].correct
                        ? 'correct'
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-900">{option}</span>
                    {showResult && index === questions[currentQuestion].correct && (
                      <CheckCircle className="w-5 h-5 text-white ml-auto" />
                    )}
                    {showResult && selectedAnswer === index && index !== questions[currentQuestion].correct && (
                      <XCircle className="w-5 h-5 text-white ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-ai-blue rounded-full flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ai-blue mb-2">解説</h3>
                    <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {[...Array(questions.length)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= currentQuestion ? 'bg-ai-blue' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="space-x-4">
                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    回答する
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>{currentQuestion === questions.length - 1 ? '結果を見る' : '次へ'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz; 