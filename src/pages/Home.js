import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Target, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-ai-blue" />,
      title: "AIの歴史",
      description: "1950年代から現代までのAI進化の軌跡を学ぼう",
      link: "/history",
      gradient: "from-ai-blue to-ai-purple"
    },
    {
      icon: <Target className="w-8 h-8 text-ai-green" />,
      title: "AIの種類",
      description: "弱いAIから強いAIまで、様々な種類を理解しよう",
      link: "/types",
      gradient: "from-ai-green to-ai-blue"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-ai-pink" />,
      title: "生成AI",
      description: "ChatGPTやStable Diffusionなど、生成AIの仕組みを探る",
      link: "/genai",
      gradient: "from-ai-pink to-ai-purple"
    },
    {
      icon: <Zap className="w-8 h-8 text-ai-purple" />,
      title: "AGI・ASI",
      description: "人間を超える知能、未来のAIについて考えよう",
      link: "/agi-asi",
      gradient: "from-ai-purple to-ai-blue"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-ai-blue" />,
      title: "理解度チェック",
      description: "10問のクイズで学習成果を確認しよう",
      link: "/quiz",
      gradient: "from-ai-blue to-ai-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 to-ai-purple/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent">
                AI Evolution Nexus
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
              AIの進化と未来への扉を開こう
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-up">
              人工知能の歴史から最新の生成AI、そして未来のAGI・ASIまで。
              初心者にもわかりやすく、インタラクティブに学べるプラットフォームです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/history"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>学習を始める</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/quiz"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>クイズに挑戦</span>
                <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">学習コンテンツ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              段階的に学べる5つのセクションで、AIの全体像を理解しましょう
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-ai-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-ai-blue font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>詳しく見る</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ai-blue to-ai-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐAIの世界へ飛び込もう
          </h2>
          <p className="text-xl mb-8 opacity-90">
            AIの基礎から最新技術まで、あなたのペースで学習できます
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/history"
              className="bg-white text-ai-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>AIの歴史から始める</span>
            </Link>
            <Link
              to="/quiz"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-ai-blue transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>いきなりクイズに挑戦</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 