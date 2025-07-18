import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Brain, Cpu, Zap, ArrowRight } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      year: "1950",
      title: "チューリングテスト",
      description: "アラン・チューリングが「Computing Machinery and Intelligence」を発表。機械が思考できるかどうかを判定するテストを提案。",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "1956",
      title: "ダートマス会議",
      description: "ジョン・マッカーシーらが「人工知能」という用語を初めて使用。AIという分野が正式に誕生した歴史的な会議。",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-blue-600"
    },
    {
      year: "1980年代",
      title: "エキスパートシステム",
      description: "専門家の知識をコンピューターに組み込んだシステムが実用化。医療診断や金融分析などで活用される。",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    },
    {
      year: "1997",
      title: "Deep Blue vs カスパロフ",
      description: "IBMのDeep Blueが世界チェス王者のガルリ・カスパロフを破る。AIが人間の知能を特定分野で上回った象徴的な出来事。",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "2010年代",
      title: "ディープラーニング革命",
      description: "深層学習の発展により、画像認識、音声認識、自然言語処理で飛躍的な進歩。AIブームが再燃。",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      year: "2022-現在",
      title: "生成AIの時代",
      description: "ChatGPT、GPT-4、Stable Diffusionなど、誰でも使える生成AIが登場。AIが一般の人々の日常に浸透し始める。",
      icon: <Zap className="w-6 h-6" />,
      color: "from-ai-blue to-ai-purple"
    }
  ];

  const milestones = [
    {
      icon: <Brain className="w-8 h-8 text-ai-blue" />,
      title: "第1次AIブーム",
      period: "1950年代-1960年代",
      description: "推論・探索の時代。簡単な問題は解けるが、複雑な現実問題には対応できず。"
    },
    {
      icon: <Cpu className="w-8 h-8 text-ai-green" />,
      title: "第2次AIブーム",
      period: "1980年代",
      description: "知識表現の時代。専門知識をコンピューターに教え込むエキスパートシステムが流行。"
    },
    {
      icon: <Zap className="w-8 h-8 text-ai-purple" />,
      title: "第3次AIブーム",
      period: "2010年代-現在",
      description: "機械学習・深層学習の時代。データから学習し、人間を超える性能を実現。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-ai-blue to-ai-purple text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AIの歴史と進化
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              1950年代から現代まで、人工知能の歴史的な歩みを辿ってみましょう
            </p>
          </div>
        </div>
      </div>

      {/* AI Boom Periods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">AIブームの変遷</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
                  {milestone.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                <p className="text-ai-blue font-medium mb-4">{milestone.period}</p>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">AIの歴史タイムライン</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-ai-blue to-ai-purple"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover ml-12 md:ml-0">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white mr-4`}>
                        {event.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                        <p className="text-ai-blue font-medium">{event.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-ai-blue shadow-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-ai-blue" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gradient-to-r from-ai-blue to-ai-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              AIの進化から学ぶこと
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">技術の波</h3>
                <p className="opacity-90">
                  AIは3つの大きな波を経て発展してきました。それぞれの波で新しい技術や概念が生まれ、現在の生成AIにつながっています。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">継続的な進歩</h3>
                <p className="opacity-90">
                  AIの発展は一直線ではなく、期待と失望を繰り返しながら進歩してきました。現在の生成AIも、過去の積み重ねの上に成り立っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div></div>
          <Link
            to="/types"
            className="btn-primary flex items-center space-x-2"
          >
            <span>次: AIの種類</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History; 