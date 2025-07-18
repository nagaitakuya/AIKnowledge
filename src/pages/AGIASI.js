import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, AlertTriangle, Lightbulb, Shield, ArrowRight, TrendingUp, Globe } from 'lucide-react';

const AGIASI = () => {
  const agiFeatures = [
    {
      title: "汎用的な学習",
      description: "どんな分野でも人間と同じように学習できる",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "創造的思考",
      description: "新しいアイデアや解決策を生み出すことができる",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "感情理解",
      description: "人間の感情を理解し、適切に対応できる",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "自律的判断",
      description: "状況に応じて自分で判断し行動できる",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const asiCapabilities = [
    {
      title: "科学的発見",
      description: "人間では思いつかない新しい科学的発見や理論の構築",
      icon: "🔬"
    },
    {
      title: "技術革新",
      description: "現在の技術を大幅に上回る革新的な技術の開発",
      icon: "🚀"
    },
    {
      title: "複雑な問題解決",
      description: "気候変動や貧困など、人類が解決できない問題の解決",
      icon: "🌍"
    },
    {
      title: "自己改良",
      description: "自分自身を改良し、さらに高い知能を獲得",
      icon: "🔄"
    }
  ];

  const timeline = [
    {
      period: "現在",
      title: "弱いAI（Narrow AI）",
      description: "特定分野に特化したAI",
      progress: 100,
      color: "bg-green-500"
    },
    {
      period: "2030-2040年代",
      title: "AGI（汎用人工知能）",
      description: "人間レベルの知能を持つAI",
      progress: 30,
      color: "bg-yellow-500"
    },
    {
      period: "2040-2070年代",
      title: "ASI（超知能）",
      description: "人間を超える知能を持つAI",
      progress: 10,
      color: "bg-purple-500"
    },
    {
      period: "シンギュラリティ",
      title: "技術的特異点",
      description: "予測不可能な技術進歩",
      progress: 5,
      color: "bg-red-500"
    }
  ];

  const risks = [
    {
      title: "制御の問題",
      description: "ASIが人間の意図とは異なる行動を取る可能性",
      severity: "高",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "経済的影響",
      description: "多くの職業がAIに代替される可能性",
      severity: "中",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "格差の拡大",
      description: "AIを持つ組織と持たない組織の格差",
      severity: "中",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "プライバシー",
      description: "高度なAIによる個人情報の解析",
      severity: "中",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "医療の革命",
      description: "病気の完全な治療法や予防法の発見",
      icon: "⚕️"
    },
    {
      title: "科学の発展",
      description: "宇宙や生命の謎を解明する新しい発見",
      icon: "🔬"
    },
    {
      title: "環境問題の解決",
      description: "気候変動や環境破壊の根本的解決",
      icon: "🌱"
    },
    {
      title: "人類の能力拡張",
      description: "人間の認知能力や身体能力の向上",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-ai-purple to-ai-pink text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AGI・ASIとは何か？
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              人間を超える知能について考え、未来への準備をしましょう
            </p>
          </div>
        </div>
      </div>

      {/* AGI vs ASI Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">AGIとASIの違い</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AGI */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-ai-green rounded-2xl flex items-center justify-center text-white mr-4">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AGI</h3>
                  <p className="text-ai-blue font-medium">Artificial General Intelligence</p>
                  <p className="text-gray-600 text-sm">汎用人工知能</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                人間と同等レベルの知能を持つAI。様々な分野で柔軟に思考し、学習し、問題を解決できる。
              </p>
              <div className="space-y-4">
                {agiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-ai-blue/10 rounded-lg flex items-center justify-center text-ai-blue">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ASI */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-ai-purple to-ai-pink rounded-2xl flex items-center justify-center text-white mr-4">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ASI</h3>
                  <p className="text-ai-purple font-medium">Artificial Super Intelligence</p>
                  <p className="text-gray-600 text-sm">超知能</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                人間の知能を大幅に上回る人工知能。現在想像できない能力を持つ可能性がある。
              </p>
              <div className="space-y-4">
                {asiCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">{capability.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{capability.title}</h4>
                      <p className="text-sm text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">AI進化の予測タイムライン</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-32 text-right">
                  <span className="text-sm font-medium text-gray-600">{item.period}</span>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-1000`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              ※ これらは研究者の予測であり、実際の進歩は予想より早くなる可能性があります
            </p>
          </div>
        </div>
      </section>

      {/* Benefits and Risks */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">可能性とリスク</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <span className="text-2xl mr-2">✨</span>
                期待される恩恵
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                潜在的なリスク
              </h3>
              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      {risk.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{risk.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          risk.severity === '高' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {risk.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{risk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Singularity */}
      <section className="py-20 bg-gradient-to-r from-ai-purple to-ai-pink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              シンギュラリティ（技術的特異点）
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8 opacity-90">
                AIが人間の知能を超えた時点で、技術進歩が加速し、
                人類には予測不可能な変化が起こるとされる転換点
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">指数関数的進歩</h3>
                  <p className="text-sm opacity-90">
                    AIが自己改良を始めると、進歩の速度が指数関数的に加速する
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">予測不可能性</h3>
                  <p className="text-sm opacity-90">
                    人間の認知能力を超えた変化により、未来の予測が困難になる
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">文明の転換</h3>
                  <p className="text-sm opacity-90">
                    人類の文明そのものが根本的に変化する可能性がある
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">未来への準備</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">個人レベルでできること</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-blue">•</span>
                    <span className="text-gray-700">AIリテラシーの向上</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-blue">•</span>
                    <span className="text-gray-700">創造性と人間らしさの活用</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-blue">•</span>
                    <span className="text-gray-700">継続的な学習と適応</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-blue">•</span>
                    <span className="text-gray-700">AIとの協働スキルの習得</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">社会レベルでの取り組み</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-purple">•</span>
                    <span className="text-gray-700">AI安全性の研究</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-purple">•</span>
                    <span className="text-gray-700">倫理的ガイドラインの策定</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-purple">•</span>
                    <span className="text-gray-700">国際的な協力体制の構築</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-ai-purple">•</span>
                    <span className="text-gray-700">教育制度の改革</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            to="/genai"
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowRight className="w-5 h-5 transform rotate-180" />
            <span>前: 生成AI</span>
          </Link>
          <Link
            to="/quiz"
            className="btn-primary flex items-center space-x-2"
          >
            <span>クイズに挑戦</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AGIASI; 