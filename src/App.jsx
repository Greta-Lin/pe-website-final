import React, { useState } from 'react';
import { 
  Heart, 
  CheckCircle, 
  BarChart2, 
  MessageCircle, 
  Users, 
  BookOpen, 
  Calendar, 
  ShieldCheck, 
  Menu, 
  X,
  ArrowRight,
  Brain,
  Activity,
  Gem,
  Home,
  RefreshCw,
  Coffee,
  GraduationCap,
  Briefcase,
  Award,
  UserPlus,
  Laptop,
  FileText,
  TrendingUp
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'dating',
    message: ''
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('感謝您的預約申請！GL諮詢將會在 24 小時內與您聯繫。');
    setFormData({ name: '', email: '', phone: '', status: 'dating', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-600 bg-stone-50 selection:bg-rose-200">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-2xl font-serif font-bold text-slate-800">GL<span className="text-rose-500">.</span>Consulting</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['適用對象', '核心優勢', '服務內容', '關於顧問', '好評見證'].map((item, index) => {
                const ids = ['target-audience', 'why-us', 'services', 'about', 'reviews'];
                return (
                  <button 
                    key={index}
                    onClick={() => scrollToSection(ids[index])}
                    className="text-slate-600 hover:text-rose-500 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                );
              })}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-rose-500 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
              >
                立即預約
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-rose-500 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {['適用對象', '核心優勢', '服務內容', '關於顧問', '好評見證'].map((item, index) => {
                const ids = ['target-audience', 'why-us', 'services', 'about', 'reviews'];
                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(ids[index])}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-slate-600 hover:text-rose-500 hover:bg-rose-50"
                  >
                    {item}
                  </button>
                );
              })}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-rose-500 text-white px-5 py-3 rounded-lg font-medium"
              >
                立即預約
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rose-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold mb-6 border border-rose-100">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 mr-2"></span>
              全球研究最深入的伴侶關係評估，Prepare/Enrich 認證協談諮詢
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              感情經營不只靠感覺，<br />
              更需要<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">系統性的分析與優化</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              結合護理公衛與科技業專案管理背景，運用高信效度評測數據化結果，
              協助你們看見關係盲點，制定具體的成長計畫。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center"
              >
                預約關係評估 <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('target-audience')}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                了解服務對象
              </button>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 科學實證</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 高隱私保密</div>
              <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 具體行動方案</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section (Moved Up) */}
      <section id="target-audience" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              誰適合這項服務?<br className="md:hidden" />
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              關係經營是一輩子的課題，Prepare/Enrich 針對不同階段的伴侶量身打造專屬分析，在每個轉折點為您釐清方向。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* A. 交往中 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <Heart className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">交往中伴侶 (Dating)</h3>
              <p className="text-rose-500 text-sm font-medium mb-4">我們適合走下去嗎？對未來感到迷惘嗎</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  探索性格差異與互補
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  識別潛在衝突點
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  評估關係長期潛力
                </li>
              </ul>
            </div>

            {/* B. 訂婚/準新人 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <Gem className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">訂婚/準新人 (Engaged)</h3>
              <p className="text-rose-500 text-sm font-medium mb-4">不只是籌備婚禮，更要籌備婚姻</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  降低離婚風險
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  預防婚後與現實落差
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  建立財務與溝通共識
                </li>
              </ul>
            </div>

            {/* C. 已婚 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <Home className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">已婚 (Married)</h3>
              <p className="text-rose-500 text-sm font-medium mb-4">相愛容易相處難，克服困難找回熱情</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  打破僵化溝通模式
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  從室友變回親密戰友
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  處理生活壓力與育兒衝突
                </li>
              </ul>
            </div>

            {/* D. 再婚伴侶 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group lg:col-span-1.5 lg:justify-self-end">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <RefreshCw className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">再婚伴侶 (Remarried)</h3>
              <p className="text-rose-500 text-sm font-medium mb-4">帶著過去的經驗，這一次經營得更好</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  針對重組家庭的特殊挑戰
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  繼父母教養與前任界線
                </li>
              </ul>
            </div>

             {/* E. 退休/空巢期 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group lg:col-span-1.5 lg:justify-self-start">
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <Coffee className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">退休/空巢期 (Retired)</h3>
              <p className="text-rose-500 text-sm font-medium mb-4">孩子離巢後，重新適應兩人世界</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  調整退休後的角色分工
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  攜手規劃人生下半場
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Prepare/Enrich? (Data Driven) */}
      <section id="why-us" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">為什麼選擇 Prepare/Enrich?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">全球被研究最多的伴侶評測系統，超過 1,800 篇學術期刊實證支持。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-rose-500 transition-colors">
              <div className="text-4xl font-bold text-rose-500 mb-4">31%</div>
              <h3 className="text-xl font-bold mb-2">降低離婚風險</h3>
              <p className="text-slate-400 text-sm">研究證實，經過此系統輔導的伴侶，離婚風險顯著降低 31%。</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-rose-500 transition-colors">
              <div className="text-4xl font-bold text-rose-500 mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2">客製化分析</h3>
              <p className="text-slate-400 text-sm">根據你們的背景與關係階段，量身打造專屬的評測內容，絕非罐頭測驗。</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-rose-500 transition-colors">
              <div className="text-4xl font-bold text-rose-500 mb-4">Global</div>
              <h3 className="text-xl font-bold mb-2">全球黃金標準</h3>
              <p className="text-slate-400 text-sm">由 Dr. David Olson 開發，具備強大的跨文化信效度，適用於各種關係型態。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Sample Section (NEW) */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            清晰易懂的視覺化分析報告
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-12">
            不再憑空猜測，透過詳細的圖表與數據，具體看見關係中的強項與成長空間。
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 mx-auto max-w-4xl">
            <img 
              src="report sample.png" 
              alt="Prepare/Enrich 評估報告範例" 
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; // Fallback data report image
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">全方位的關係檢測面向</h2>
            <p className="text-slate-600">透過評量檢測，我們將深入探討影響關係的九大關鍵領域</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "溝通模式", desc: "理解彼此的表達與傾聽習慣，打破無效溝通的迴圈。", icon: <MessageCircle className="w-6 h-6 text-rose-500"/> },
              { title: "衝突解決", desc: "學習如何健康地爭吵，並從衝突中修復與成長。", icon: <ShieldCheck className="w-6 h-6 text-rose-500"/> },
              { title: "財務觀念", desc: "釐清金錢價值觀、消費習慣與對未來的財務期待。", icon: <BarChart2 className="w-6 h-6 text-rose-500"/> },
              { title: "性格差異", desc: "分析雙方人格特質，理解差異來源，減少誤解。", icon: <Users className="w-6 h-6 text-rose-500"/> },
              { title: "壓力處理", desc: "識別個人與共同壓力源，建立互相支持的應對機制。", icon: <Activity className="w-6 h-6 text-rose-500"/> },
              { title: "親密關係", desc: "探討情感連結與性期待，建立更深層的親密感。", icon: <Heart className="w-6 h-6 text-rose-500"/> },
              { title: "原生家庭", desc: "看見家庭背景如何影響現在的互動模式。", icon: <Users className="w-6 h-6 text-rose-500"/> },
              { title: "休閒活動", desc: "平衡個人空間與共同時間，提升生活品質。", icon: <Calendar className="w-6 h-6 text-rose-500"/> },
              { title: "信仰與價值", desc: "探索核心價值觀與靈性信仰對關係的影響。", icon: <BookOpen className="w-6 h-6 text-rose-500"/> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Differentiator (Updated with Image) */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-slate-100 transform -rotate-3 rounded-2xl"></div>
              {/* Image Container with Fallback */}
              <div className="relative bg-slate-200 rounded-2xl overflow-hidden shadow-xl aspect-[4/5] flex items-center justify-center">
                 <img 
                   src="gl.jpg" 
                   alt="GL 諮詢專業形象照" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.target.onerror = null;
                     e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Fallback professional woman image
                   }}
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-rose-100 p-2 rounded-full text-rose-600">
                    <Activity size={20} />
                  </div>
                  <span className="font-bold text-slate-800">獨家優勢</span>
                </div>
                <p className="text-sm text-slate-600">將科技業 PM 的「專案管理思維」導入情感關係評估，協助及釐清問題所在。</p>
              </div>
            </div>
            
            {/* Right Text Column (Updated) */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                GL 顧問 <span className="block text-xl md:text-2xl text-rose-500 mt-2 font-sans font-medium">美國 Prepare/Enrich 認證協談員</span>
              </h2>
              
              <div className="text-slate-600 mb-10 leading-relaxed text-lg">
                <p>
                  愛情與婚姻的經營並非「憑感覺」，在我看來健康的關係如同人生中最重要的專案，需要釐清問題、維護與持續優化。
                </p>
                <p className="mt-4">
                  運用高信效度評估工具，為伴侶關係進行全面的健檢，釐清問題核心 (Clarify)、分析優勢 (Analyze)、並制定可執行的改善計畫 (Action Plan)是關鍵的一環。
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-rose-50 p-2 rounded-full">
                    <GraduationCap className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800">學術背景</h4>
                    <p className="text-slate-600">澳洲國立大學公共衛生碩士 / 國立成功大學護理學士</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-rose-50 p-2 rounded-full">
                    <Briefcase className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800">跨界經驗</h4>
                    <p className="text-slate-600">科技業專案經理/產品經理，擅長問題分析與解決</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-rose-50 p-2 rounded-full">
                    <Award className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800">專業認證</h4>
                    <p className="text-slate-600">美國 Prepare/Enrich 協談員認證</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-rose-50 p-2 rounded-full">
                    <Users className="w-5 h-5 text-rose-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-800">實務經驗</h4>
                    <p className="text-slate-600">多對真實伴侶協談經驗</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Updated Layout */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              服務流程：簡單四步驟，開啟改變
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              這不僅僅是一次性的諮詢，而是一個完整的成長循環。我們透過「評測 + 對談 + 技巧建立」的方法，幫助你們建立長期穩定的關係地基。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "預約邀請", desc: "填寫預約表單，建立專屬評測。", icon: <UserPlus className="w-6 h-6 text-rose-500"/> },
              { step: "02", title: "線上測驗", desc: "雙方各自完成約 30-45 分鐘的線上評測 (在家即可完成)。", icon: <Laptop className="w-6 h-6 text-rose-500"/> },
              { step: "03", title: "報告解讀", desc: "預約諮詢時間，深入解析報告，指出優勢與待成長之處。", icon: <FileText className="w-6 h-6 text-rose-500"/> },
              { step: "04", title: "技巧建立", desc: "針對弱項進行實作練習 (Skill Building)，制定行動計畫。", icon: <TrendingUp className="w-6 h-6 text-rose-500"/> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded mr-2">STEP {item.step}</span>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">預約您的關係健檢</h2>
              <p className="text-slate-600">
                給彼此一個機會，讓愛走得更長遠。
                <br />填寫下方表單，我將親自與您聯繫安排時間。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">您的稱呼</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="王小明"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">聯絡電話</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="0912-345-678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">電子信箱</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">目前的關係狀態</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="dating">交往中 (Dating)</option>
                  <option value="engaged">訂婚/計畫結婚 (Engaged)</option>
                  <option value="married">已婚 (Married)</option>
                  <option value="other">其他/再婚 (Other)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">您想改善或了解的問題 (選填)</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                  placeholder="例如：我們最近常為了金錢吵架、想做婚前輔導..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-rose-600 transition-colors shadow-lg transform hover:-translate-y-0.5"
              >
                送出預約申請
              </button>
              
              <p className="text-xs text-slate-400 text-center mt-4">
                * 您的資料將嚴格保密，僅用於聯繫諮詢事宜。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer & Disclaimer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <span className="text-2xl font-serif font-bold text-white mb-4 block">GL<span className="text-rose-500">.</span>Consulting</span>
              <p className="text-sm max-w-sm">
                協助伴侶透過數據看見關係的全貌。我們致力於提供安全、客觀且具建設性的協談諮詢服務，讓愛成為彼此成長的動力。
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-white font-bold mb-4">聯絡資訊</h4>
              <p className="mb-2">服務地區：台灣 (實體/線上皆可)</p>
              <p>Email: gretalin1234@gmail.com</p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-xs leading-relaxed text-slate-500">
            <h5 className="font-bold text-slate-400 mb-2">免責聲明 (Disclaimer)</h5>
            <p className="mb-4">
              本服務提供伴侶關係評估諮詢，旨在促進關係成長與溝通技巧建立，<span className="text-slate-300">並不構成心理治療 (Psychotherapy) 或醫療行為</span>。
              若在評估過程中發現需要更深層的個人心理或病理處理，或涉及醫療需求，我們將會協助轉介至合格的臨床心理師或諮商心理師進行後續協助。
            </p>
            <p>&copy; {new Date().getFullYear()} GL Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
