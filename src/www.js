import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Navigation -->
    <nav id="site-nav" class="mb-6 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm animate-fade-in-down">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <a href="index.html" class="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">認識網際網路</a>
          <a href="www.html" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600">全球資訊網 WWW</a>
          <a href="#" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">更多頁面</a>
        </div>
        <button id="nav-toggle" class="md:hidden p-2 rounded-md bg-white/30">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div id="nav-mobile" class="nav-mobile md:hidden mt-3 hidden flex-col items-center gap-2">
        <a href="index.html" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">認識網際網路</a>
        <a href="www.html" class="w-full text-center px-4 py-2 rounded-md bg-green-600 text-white">全球資訊網 WWW</a>
        <a href="#" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">更多頁面</a>
      </div>
    </nav>

    <!-- Header -->
    <header class="mb-16 text-center animate-fade-in-down">
      <div class="inline-block mb-6">
        <div class="flex items-center justify-center h-20 w-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full shadow-lg animate-pulse-glow">
          <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.5 2h11A2.5 2.5 0 0118 4.5v11A2.5 2.5 0 0115.5 18h-11A2.5 2.5 0 012 15.5v-11A2.5 2.5 0 014.5 2zm7 10l-4-3v6h8v-6l-4 3z"/>
          </svg>
        </div>
      </div>
      <h1 class="text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">全球資訊網</h1>
      <h1 class="text-5xl font-bold text-gray-800 mb-4">WWW</h1>
      <p class="text-2xl text-gray-600 font-light">World Wide Web - 探索網際網路的核心應用</p>
      <div class="mt-8 h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
    </header>

    

    <!-- Rise of WWW -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.1s">
      <div class="bg-white rounded-xl shadow-md hover-lift p-8 border-l-8 border-green-600">
        <h2 class="text-4xl font-bold text-green-600 mb-6 flex items-center">
          <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
          全球資訊網 WWW 的興起
        </h2>
        <div class="space-y-4 text-left">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
            <p class="text-gray-700 leading-relaxed">
              World Wide Web，簡稱<span class="text-green-600 font-bold">WWW</span>，中文譯名為<span class="text-green-600 font-bold">全球資訊網</span>，從發明至今已超過二十年了，它不但變成一個日常普遍使用的工具，也幾乎成了整個網路應用的代名詞。許多人的工作與生活幾乎少不了它，有人藉它一夕成名與短期致富，也有許多人為之沈迷成癮而無法自拔。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What is WWW -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.2s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        什麼是 WWW？
      </h2>
      <div class="bg-white rounded-xl shadow-md hover-lift p-8 border-t-4 border-green-600">
        <p class="text-gray-700 leading-relaxed mb-4 text-left">
          當電腦打開，網路連線好了，打開 Yahoo 的首頁，進入到信箱或拍賣，或者是到 Google 查詢資料，點選搜尋到的頁面，或是連上 Facebook，查看好友動態，玩一些小遊戲，或者是到 YouTube 看看趣味影片，到無名小站看看朋友的部落格...這些服務都是 WWW 的應用。
        </p>
        <p class="text-gray-700 leading-relaxed text-left">
          而用來查看 Yahoo、Google、Facebook 的這個程式，就叫做<span class="text-green-600 font-bold">瀏覽器（Browser）</span>。
        </p>
      </div>
    </section>

    <!-- WWW Architecture -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        WWW 架構
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl shadow-lg hover-lift p-8">
          <div class="text-4xl mb-4">🖥️</div>
          <h3 class="text-2xl font-bold mb-3">伺服器（Server）</h3>
          <p class="leading-relaxed">主機架設網站，提供網頁服務。儲存和管理網頁內容，當客戶端請求時回應網頁數據。</p>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl shadow-lg hover-lift p-8">
          <div class="text-4xl mb-4">🌐</div>
          <h3 class="text-2xl font-bold mb-3">瀏覽器（Browser）</h3>
          <p class="leading-relaxed">客戶端軟體，透過它連線取得網頁內容，加以呈現。使用者透過瀏覽器與伺服器通訊。</p>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-md hover-lift p-8 border-t-4 border-green-600">
        <p class="text-gray-700 leading-relaxed text-left font-medium">
          WWW 是一種<span class="text-green-600 font-bold">主從式架構（Client-Server）</span>的服務，首先必須有主機架設網站，提供網頁服務，然後使用者端透過瀏覽器（Browser）軟體，連線取得網頁內容，加以呈現。
        </p>
      </div>
    </section>

    <!-- HTTP Protocol -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        HTTP 通訊協定
      </h2>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-md hover-lift p-8 border-l-8 border-green-600">
        <p class="text-gray-700 leading-relaxed mb-6 text-left">
          HTTP（<span class="font-bold">HyperText Transfer Protocol</span>）是 WWW 使用的通訊協定，它定義了瀏覽器和伺服器之間如何傳輸網頁內容。當您在瀏覽器中輸入網址時，瀏覽器會透過 HTTP 協定向伺服器請求網頁，伺服器則回應網頁內容給瀏覽器顯示。
        </p>
        <p class="text-gray-700 leading-relaxed mb-6 text-left font-medium">HTTP 的特點包括：</p>
        <ul class="space-y-3">
          <li class="bg-white rounded-lg p-4 text-left border-l-4 border-green-400">
            <span class="font-bold text-green-700">無狀態（Stateless）</span>
            <p class="text-gray-600 text-sm">每次請求都是獨立的，伺服器不保存客戶端的狀態信息</p>
          </li>
          <li class="bg-white rounded-lg p-4 text-left border-l-4 border-green-400">
            <span class="font-bold text-green-700">請求-回應模式</span>
            <p class="text-gray-600 text-sm">瀏覽器發送請求，伺服器回應相應的網頁內容</p>
          </li>
          <li class="bg-white rounded-lg p-4 text-left border-l-4 border-green-400">
            <span class="font-bold text-green-700">支援多種資料格式</span>
            <p class="text-gray-600 text-sm">HTML、圖片、影片、音頻等各種媒體類型</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.5s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        全球資訊網的發明
      </h2>
      <p class="text-gray-700 leading-relaxed mb-10 text-lg text-left">
        WWW 的發展是一段充滿創意與突破的歷程，從學術研究工具演變成為全世界最普遍使用的網路應用。
      </p>

      <div class="space-y-6">
        <!-- 1990 -->
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-600 rounded-xl p-8 hover-lift shadow-md">
          <h4 class="text-2xl font-bold text-green-700 mb-4">📅 1990 年 - WWW 的誕生</h4>
          <p class="text-gray-700 leading-relaxed mb-4 text-left">
            位於歐洲的原子能研究中心 CERN 的一位物理學家 <span class="font-bold">Tim Berners-Lee</span>，為了要將許多實驗室的資料讓大家分享使用，因此建立了 Web 的模式原型。隨著網路的興起，變成了目前最普遍廣為使用的系統。
          </p>
          <p class="text-gray-700 leading-relaxed mb-4 text-left font-medium">Tim Berners-Lee 發明了三個關鍵技術：</p>
          <ul class="space-y-2">
            <li class="bg-white rounded-lg p-4 text-left border-l-3 border-green-400 text-gray-700"><strong>HTML（HyperText Markup Language）</strong> - 網頁標記語言</li>
            <li class="bg-white rounded-lg p-4 text-left border-l-3 border-green-400 text-gray-700"><strong>HTTP（HyperText Transfer Protocol）</strong> - 超文字傳輸協定</li>
            <li class="bg-white rounded-lg p-4 text-left border-l-3 border-green-400 text-gray-700"><strong>URL（Uniform Resource Locator）</strong> - 統一資源定位符</li>
          </ul>
        </div>

        <!-- 1991 -->
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-8 border-blue-600 rounded-xl p-8 hover-lift shadow-md">
          <h4 class="text-2xl font-bold text-blue-700 mb-3">📅 1991 年 - 第一個網站上線</h4>
          <p class="text-gray-700 leading-relaxed text-left">
            1991年8月6日，Tim Berners-Lee 在 CERN 建立了第一個網站，這個網站至今仍然可以訪問，它解釋了 WWW 是什麼以及如何使用它。
          </p>
        </div>

        <!-- 1993 -->
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-8 border-purple-600 rounded-xl p-8 hover-lift shadow-md">
          <h4 class="text-2xl font-bold text-purple-700 mb-3">📅 1993 年 - Mosaic 瀏覽器</h4>
          <p class="text-gray-700 leading-relaxed text-left">
            Mosaic 瀏覽器的問世，讓一般使用者也能輕鬆瀏覽網頁，這標誌著 WWW 從學術研究工具轉向大眾應用。
          </p>
        </div>
      </div>
    </section>

    <!-- Tim Berners-Lee -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.6s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        Tim Berners-Lee
      </h2>
      <div class="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg hover-lift p-8">
        <p class="text-lg leading-relaxed mb-4">
          Tim Berners-Lee 被譽為<span class="font-bold text-yellow-200">「WWW 之父」</span>，他發明了全球資訊網，並在 1994 年創立了<span class="font-bold text-yellow-200">W3C</span>（World Wide Web Consortium），致力於制定和推廣 Web 標準。
        </p>
        <p class="text-lg leading-relaxed">
          他堅持 WWW 應該是<span class="font-bold text-yellow-200">開放和免費的</span>，這使得網際網路能夠快速發展並普及到全世界。
        </p>
      </div>
    </section>

    <!-- W3C -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.7s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        全球資訊網協會 W3C
      </h2>
      
      <div class="bg-white rounded-xl shadow-md hover-lift p-8 border-t-4 border-green-600 mb-8">
        <h3 class="text-2xl font-bold text-green-700 mb-4">W3C 的使命</h3>
        <p class="text-gray-700 leading-relaxed mb-4 text-left">
          全球資訊網協會（<span class="font-bold">World Wide Web Consortium，簡稱 W3C</span>），是 WWW 標準的制定機構，1994年10月由 Tim Berners-Lee 建立。為解決 Web 應用中不同平台、技術和開發者帶來的不相容問題，保障 Web 資訊的順利和完整流通，全球資訊網協會制定了一系列標準並督促 Web 應用開發者和內容提供者遵循這些標準。
        </p>
        <p class="text-gray-700 leading-relaxed text-left font-medium mb-4">W3C 制定的標準包括：</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-green-50 rounded-lg p-4 text-left border-l-3 border-green-400">
            <span class="font-bold text-green-700">HTML/XHTML</span>
            <p class="text-sm text-gray-600">網頁結構標準</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4 text-left border-l-3 border-green-400">
            <span class="font-bold text-green-700">CSS</span>
            <p class="text-sm text-gray-600">網頁樣式標準</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4 text-left border-l-3 border-green-400">
            <span class="font-bold text-green-700">XML</span>
            <p class="text-sm text-gray-600">可擴展標記語言</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4 text-left border-l-3 border-green-400">
            <span class="font-bold text-green-700">JavaScript/ECMAScript</span>
            <p class="text-sm text-gray-600">網頁腳本語言標準</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4 text-left border-l-3 border-green-400">
            <span class="font-bold text-green-700">Web Accessibility</span>
            <p class="text-sm text-gray-600">網頁無障礙標準</p>
          </div>
          <div class="bg-green-50 rounded-lg p-4 text-left border-l-3 border-green-400">
            <span class="font-bold text-green-700">SVG</span>
            <p class="text-sm text-gray-600">可縮放向量圖形</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Terminology -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.8s">
      <h2 class="text-4xl font-bold text-green-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-green-600 rounded-full mr-4"></span>
        相關名詞
      </h2>
      <div class="space-y-4">
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-green-600 text-left">
          <p class="font-bold text-xl text-green-700 mb-2">瀏覽器（Browser）</p>
          <p class="text-gray-700">用來瀏覽網頁的軟體程式，如 Chrome、Firefox、Safari、Edge 等。瀏覽器負責向伺服器請求網頁內容，並將 HTML、CSS、JavaScript 等資源呈現給使用者。</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-blue-600 text-left">
          <p class="font-bold text-xl text-blue-700 mb-2">入口網站（Portal）</p>
          <p class="text-gray-700">提供多種網路服務的綜合性網站，如 Yahoo、MSN 等。通常包含搜尋、新聞、信箱、購物等多種功能，是使用者進入網路的起點。</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-purple-600 text-left">
          <p class="font-bold text-xl text-purple-700 mb-2">搜尋引擎（Search Engine）</p>
          <p class="text-gray-700">幫助使用者在網路上搜尋資訊的工具，如 Google、Bing、百度等。透過爬蟲程式收集網頁內容，建立索引資料庫，提供快速搜尋服務。</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-red-600 text-left">
          <p class="font-bold text-xl text-red-700 mb-2">社群網站（Social Network）</p>
          <p class="text-gray-700">讓使用者建立社交關係、分享內容的網站，如 Facebook、Twitter、LinkedIn 等。使用者可以建立個人檔案、分享動態、與朋友互動。</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-orange-600 text-left">
          <p class="font-bold text-xl text-orange-700 mb-2">網誌部落格網站（Blog）</p>
          <p class="text-gray-700">個人或組織發布文章、日記、評論的網站，如 WordPress、Blogger、無名小站等。讓使用者可以輕鬆建立和維護自己的內容網站。</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-cyan-600 text-left">
          <p class="font-bold text-xl text-cyan-700 mb-2">微博網站（Microblog）</p>
          <p class="text-gray-700">允許使用者發布短訊息、圖片、影片的社群平台，如 Twitter、微博等。訊息通常有字數限制，強調即時性和簡潔性。</p>
        </div>
      </div>
    </section>

    <!-- Web 2.0 -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.9s">
      <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl shadow-lg hover-lift p-8">
        <h2 class="text-3xl font-bold mb-6 flex items-center">
          <span class="w-3 h-3 bg-yellow-300 rounded-full mr-4"></span>
          Web 2.0
        </h2>
        <p class="text-lg leading-relaxed">
          強調<span class="font-bold text-yellow-200">使用者參與、互動和協作</span>的網路應用模式。相較於傳統的靜態網頁，Web 2.0 網站讓使用者可以創造、分享和修改內容，如 Wikipedia、YouTube、Facebook 等，促進了網路應用從單向傳播向雙向互動的轉變。
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-20 pt-12 border-t-2 border-gray-300 text-center text-gray-600 animate-fade-in-up" style="animation-delay: 1s">
      <p class="text-lg font-semibold mb-2">© 2026 全球資訊網 WWW</p>
      <p class="text-sm">World Wide Web Knowledge</p>
      <div class="mt-4 flex justify-center gap-2">
        <span class="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
        <span class="inline-block w-2 h-2 bg-emerald-600 rounded-full"></span>
        <span class="inline-block w-2 h-2 bg-teal-600 rounded-full"></span>
      </div>
    </footer>
    </div>
    </div>
  `

  // Mobile nav toggle + sticky shadow on scroll
  const _navToggle = document.getElementById('nav-toggle')
  const _navMobile = document.getElementById('nav-mobile')
  const _siteNav = document.getElementById('site-nav')
  if (_navToggle && _navMobile) {
    _navToggle.addEventListener('click', () => {
      const isOpen = _navMobile.classList.toggle('hidden')
      _navMobile.classList.toggle('flex')
      if (!isOpen) _navMobile.classList.add('open')
      else _navMobile.classList.remove('open')
    })
    _navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      _navMobile.classList.add('hidden')
      _navMobile.classList.remove('flex')
      _navMobile.classList.remove('open')
    }))
  }

  // add shadow when scrolling
  if (_siteNav) {
    const onScroll = () => {
      if (window.scrollY > 12) _siteNav.classList.add('site-nav-shadow')
      else _siteNav.classList.remove('site-nav-shadow')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  }
