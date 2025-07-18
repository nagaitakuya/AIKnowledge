import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Image, Music, Code, FileText, Video, ArrowRight, Cpu, Zap } from 'lucide-react';

const GenAI = () => {
  const generativeAITypes = [
    {
      title: "テキスト生成",
      description: "ChatGPT、GPT-4などの大規模言語モデルがテキストを生成",
      icon: <FileText className="w-8 h-8" />,
      examples: ["文章執筆", "翻訳", "要約", "コード生成", "質問回答"],
      color: "from-blue-500 to-purple-600",
      models: ["ChatGPT", "GPT-4", "Claude", "Gemini"]
    },
    {
      title: "画像生成",
      description: "Stable Diffusion、DALL-E等がテキストから画像を生成",
      icon: <Image className="w-8 h-8" />,
      examples: ["イラスト作成", "写真生成", "アート作品", "デザイン", "画像編集"],
      color: "from-green-500 to-blue-600",
      models: ["DALL-E", "Stable Diffusion", "Midjourney", "Firefly"]
    },
    {
      title: "音楽・音声生成",
      description: "AIが音楽を作曲したり、音声を合成したりする技術",
      icon: <Music className="w-8 h-8" />,
      examples: ["作曲", "音声合成", "歌声生成", "効果音作成", "ポッドキャスト"],
      color: "from-purple-500 to-pink-600",
      models: ["Mubert", "AIVA", "Eleven Labs", "Suno"]
    },
    {
      title: "動画生成",
      description: "テキストや画像から動画を生成する最新技術",
      icon: <Video className="w-8 h-8" />,
      examples: ["動画作成", "アニメーション", "映像編集", "エフェクト", "ショート動画"],
      color: "from-orange-500 to-red-600",
      models: ["Runway", "Pika Labs", "Stable Video", "Gen-2"]
    },
    {
      title: "コード生成",
      description: "プログラミングコードを自動生成するAI",
      icon: <Code className="w-8 h-8" />,
      examples: ["プログラミング", "バグ修正", "コード説明", "アルゴリズム", "テスト作成"],
      color: "from-indigo-500 to-purple-600",
      models: ["GitHub Copilot", "CodeT5", "Codex", "Claude"]
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "大量のデータで学習",
      description: "インターネット上のテキスト、画像、音声などの膨大なデータから学習します。",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      step: "2",
      title: "パターンを理解",
      description: "データのパターンや関係性を深層学習によって理解します。",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "3",
      title: "新しいコンテンツを生成",
      description: "学習したパターンを基に、新しいコンテンツを創造的に生成します。",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const transformerFeatures = [
    {
      title: "Attention機構",
      description: "文脈の重要な部分に注目して処理する仕組み",
      icon: "🎯"
    },
    {
      title: "並列処理",
      description: "従来の逐次処理より高速で効率的な処理",
      icon: "⚡"
    },
    {
      title: "スケーラビリティ",
      description: "大量のデータとパラメータで性能向上",
      icon: "📈"
    },
    {
      title: "転移学習",
      description: "一度学習したモデルを他のタスクに応用",
      icon: "🔄"
    }
  ];

  const useCases = [
    {
      category: "ビジネス",
      examples: ["カスタマーサポート", "コンテンツ制作", "マーケティング", "資料作成"],
      icon: "💼"
    },
    {
      category: "クリエイティブ",
      examples: ["イラスト制作", "音楽制作", "小説執筆", "ゲーム開発"],
      icon: "🎨"
    },
    {
      category: "教育",
      examples: ["個別指導", "問題作成", "学習支援", "言語学習"],
      icon: "📚"
    },
    {
      category: "技術",
      examples: ["プログラミング", "データ分析", "研究支援", "自動化"],
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-ai-pink to-ai-purple text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              生成AIの仕組み
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              ChatGPTから画像生成まで、創造的なAIの世界を探求しましょう
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">生成AIの基本的な仕組み</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-ai-pink to-ai-purple rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                  <div className="w-12 h-12 bg-gradient-to-r from-ai-pink to-ai-purple rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generative AI Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">生成AIの種類</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {generativeAITypes.map((type, index) => (
              <div key={index} className="card-hover bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white mr-4`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-2">活用例:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, i) => (
                      <span key={i} className="inline-block bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">主要モデル:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.models.map((model, i) => (
                      <span key={i} className="inline-block bg-gradient-to-r from-ai-pink to-ai-purple text-white px-3 py-1 rounded-full text-sm">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformer Architecture */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Transformerアーキテクチャ</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-center text-gray-600 mb-8">
              現在の生成AIの多くは「Transformer」という技術を基盤としています
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformerFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">生成AIの活用分野</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{useCase.category}</h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20 bg-gradient-to-r from-ai-pink to-ai-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              生成AIの未来
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">マルチモーダル</h3>
                <p className="opacity-90">
                  テキスト、画像、音声を統合した、より自然で多様な生成AIが登場するでしょう。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">個人化</h3>
                <p className="opacity-90">
                  ユーザーの好みや特性に合わせて、パーソナライズされた生成AIが実現されます。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">効率化</h3>
                <p className="opacity-90">
                  より少ないリソースで高品質な生成を行う、効率的なAIが開発されるでしょう。
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
            to="/types"
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowRight className="w-5 h-5 transform rotate-180" />
            <span>前: AIの種類</span>
          </Link>
          <Link
            to="/agi-asi"
            className="btn-primary flex items-center space-x-2"
          >
            <span>次: AGI・ASI</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenAI; 