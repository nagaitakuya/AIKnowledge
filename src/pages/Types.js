import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Brain, Zap, Users, Book, ArrowRight, ChevronRight } from 'lucide-react';

const Types = () => {
  const aiTypes = [
    {
      title: "弱いAI（Narrow AI）",
      subtitle: "特定分野に特化した人工知能",
      description: "現在実用化されているAIの大部分がこのタイプ。特定のタスクに特化しており、そのタスクでは人間を上回る性能を発揮することもある。",
      examples: ["画像認識", "音声認識", "翻訳", "チェス・将棋AI", "自動運転"],
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      status: "現在主流"
    },
    {
      title: "強いAI（AGI）",
      subtitle: "人間レベルの汎用人工知能",
      description: "人間と同等かそれ以上の知能を持ち、様々な分野で柔軟に思考・学習できるAI。現在はまだ実現されていない。",
      examples: ["複雑な推論", "創造的思考", "感情理解", "汎用学習", "自律的判断"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-blue-600",
      status: "未来の目標"
    },
    {
      title: "超知能（ASI）",
      subtitle: "人間を超える人工知能",
      description: "人間の知能を大幅に上回る人工知能。理論的には可能だが、その実現と制御は大きな課題。",
      examples: ["科学的発見", "複雑な問題解決", "長期戦略立案", "自己改良", "未知の創造"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      status: "遠い未来"
    }
  ];

  const learningTypes = [
    {
      title: "教師あり学習",
      description: "正解データを使って学習する方法",
      examples: ["画像分類", "スパム検出", "価格予測"],
      icon: <Book className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "教師なし学習",
      description: "正解データなしでパターンを見つける方法",
      examples: ["クラスタリング", "異常検知", "データ圧縮"],
      icon: <Brain className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "強化学習",
      description: "試行錯誤を通じて最適な行動を学ぶ方法",
      examples: ["ゲームAI", "自動運転", "ロボット制御"],
      icon: <Target className="w-6 h-6" />,
      color: "bg-purple-500"
    }
  ];

  const capabilities = [
    {
      human: "人間の知能",
      ai: "現在のAI",
      items: [
        { name: "論理的推論", human: 70, ai: 85 },
        { name: "創造性", human: 90, ai: 40 },
        { name: "感情理解", human: 85, ai: 30 },
        { name: "学習速度", human: 50, ai: 95 },
        { name: "記憶容量", human: 40, ai: 100 },
        { name: "柔軟性", human: 95, ai: 45 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-ai-green to-ai-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIの種類と仕組み
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              人工知能の分類と学習方法について理解しましょう
            </p>
          </div>
        </div>
      </div>

      {/* AI Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">AIの3つの分類</h2>
          <div className="space-y-8">
            {aiTypes.map((type, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white shrink-0`}>
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                        <p className="text-lg text-ai-blue font-medium">{type.subtitle}</p>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        type.status === '現在主流' ? 'bg-green-100 text-green-800' :
                        type.status === '未来の目標' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {type.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">具体例:</p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, i) => (
                          <span key={i} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">機械学習の3つの手法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningTypes.map((learning, index) => (
              <div key={index} className="card-hover bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className={`w-12 h-12 rounded-xl ${learning.color} flex items-center justify-center text-white mb-6`}>
                  {learning.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{learning.title}</h3>
                <p className="text-gray-600 mb-6">{learning.description}</p>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">応用例:</p>
                  <ul className="space-y-1">
                    {learning.examples.map((example, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 mr-2 text-ai-blue" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human vs AI Comparison */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">人間の知能 vs AI</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-center text-gray-600 mb-8">
              現在のAIと人間の知能を各分野で比較してみましょう
            </p>
            <div className="space-y-6">
              {capabilities[0].items.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-ai-blue">人間: {item.human}%</span>
                      <span className="text-ai-purple">AI: {item.ai}%</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-ai-blue to-ai-blue/80 rounded-full transition-all duration-1000"
                        style={{ width: `${item.human}%` }}
                      ></div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-ai-purple to-ai-purple/80 rounded-full transition-all duration-1000"
                        style={{ width: `${item.ai}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gradient-to-r from-ai-green to-ai-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              AIの種類から見えること
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">現在の限界</h3>
                <p className="opacity-90">
                  現在のAIは特定分野では優秀ですが、人間のような汎用性や創造性は限定的です。それぞれの特徴を理解することが重要です。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">未来の可能性</h3>
                <p className="opacity-90">
                  AGIの実現は人類にとって大きな転換点となる可能性があります。その準備として、AIの本質を理解することが大切です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/history"
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowRight className="w-5 h-5 transform rotate-180" />
            <span>前: AIの歴史</span>
          </Link>
          <Link
            to="/genai"
            className="btn-primary flex items-center space-x-2"
          >
            <span>次: 生成AI</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Types; 