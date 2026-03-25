export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1e1e1e]">
      {/* 顶部超细导航栏 */}
      <nav className="border-b border-gray-100 py-4 px-6 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <span className="text-2xl font-black tracking-tighter text-[#A51C30]">NBU</span>
          <div className="hidden md:flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Academics</a>
            <a href="#" className="hover:text-black">Research</a>
          </div>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest border-2 border-black px-4 py-1 hover:bg-black hover:text-white transition-all">
          Search
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* 核心口号区 */}
        <section className="mb-20">
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight tracking-tight mb-8">
            Veritas. <br/>
            <span className="text-[#A51C30] italic font-normal">New Bee.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-600 leading-relaxed mb-10">
            The New Bee University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.
          </p>
          <div className="flex gap-4">
            <a href="/admission" className="harvard-button">Apply to NBU</a>
            <a href="/diploma" className="bg-black text-white px-8 py-3 font-bold hover:bg-[#A51C30]">Get Diploma</a>
          </div>
        </section>

        {/* 仿哈佛三列新闻网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 section-border">
          <article>
            <div className="h-64 bg-gray-100 mb-6 overflow-hidden">
               <div className="w-full h-full bg-[#A51C30]/5 flex items-center justify-center text-4xl text-[#A51C30]">ꖿ</div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 hover:text-[#A51C30] cursor-pointer transition-colors">
              Breakthrough in Hive Mind Computing at NBU
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Faculty of NBIT explores the boundaries of collective intelligence and the "New Bee" philosophy in modern society.
            </p>
          </article>

          <article>
            <div className="h-64 bg-gray-100 mb-6 flex items-center justify-center text-4xl text-gray-300">🏛️</div>
            <h3 className="text-2xl font-serif font-bold mb-4 hover:text-[#A51C30] cursor-pointer transition-colors">
              NBU Financial Aid: 0% Tuition, 100% Academic Freedom
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dean of Admissions announces a revolutionary new funding model for students worldwide.
            </p>
          </article>

          <article>
            <div className="h-64 bg-gray-100 mb-6 flex items-center justify-center text-4xl text-gray-300">🎓</div>
            <h3 className="text-2xl font-serif font-bold mb-4 hover:text-[#A51C30] cursor-pointer transition-colors">
              Commencement 2026: Honoring Our Virtual Scholars
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Join us in celebrating the first graduating class of the New Bee Institute of Technology.
            </p>
          </article>
        </div>
      </main>

      {/* 底部版权栏 */}
      <footer className="bg-[#293333] text-white py-16 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-3xl font-black mb-4 tracking-tighter">NBU</h2>
            <p className="text-gray-400 text-sm">© 2026 New Bee University. <br/>Cambridge, Virtual Space, Poland.</p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm font-bold uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-[#A51C30]">Policies</a>
              <a href="#" className="hover:text-[#A51C30]">Library</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-[#A51C30]">Contact</a>
              <a href="#" className="hover:text-[#A51C30]">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
