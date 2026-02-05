import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Navigation -->
    <nav id="site-nav" class="mb-6 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm animate-fade-in-down">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <a href="index.html" class="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600">認識網際網路</a>
          <a href="www.html" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">全球資訊網 WWW</a>
          <a href="browse.html" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">瀏覽器 Browser</a>
          <a href="#" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">更多頁面</a>
        </div>
        <button id="nav-toggle" class="md:hidden p-2 rounded-md bg-white/30">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div id="nav-mobile" class="nav-mobile md:hidden mt-3 hidden flex-col items-center gap-2">
        <a href="index.html" class="w-full text-center px-4 py-2 rounded-md bg-blue-600 text-white">認識網際網路</a>
        <a href="www.html" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">全球資訊網 WWW</a>
        <a href="browse.html" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">瀏覽器 Browser</a>
        <a href="#" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">更多頁面</a>
      </div>
    </nav>

    <!-- Header -->
    <header class="mb-16 text-center animate-fade-in-down">
      <div class="inline-block mb-6">
        <div class="flex items-center justify-center h-20 w-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-lg animate-pulse-glow">
          <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5M10.5 1.5v8m0 0l-3-3m3 3l3-3" stroke="currentColor" stroke-width="1.5" fill="none"/>
          </svg>
        </div>
      </div>
      <h1 class="text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">認識網際網路</h1>
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Internet</h1>
      <p class="text-2xl text-gray-600 font-light">探索全球網路世界的基礎知識</p>
      <div class="mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
    </header>

    

    <!-- What is Internet -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.1s">
      <div class="bg-white rounded-xl shadow-md hover-lift p-8 border-l-8 border-blue-600">
        <h2 class="text-4xl font-bold text-blue-600 mb-6 flex items-center">
          <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
          什麼是網際網路
        </h2>
        <div class="space-y-4 text-left">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <p class="text-gray-700 leading-relaxed font-medium">
              Internet，中文譯名<span class="text-blue-600 font-bold">網際網路</span>，簡單而言，就是目前將全世界的電腦網路連接在一起，透過相同的通訊協定，使彼此能互通訊息、交換資料及共享資源的網路環境。
            </p>
          </div>
          <p class="text-gray-700 leading-relaxed">
            Internet 基本上是由許多個別的網路機構所連結而成，也就是各機構將網路連結而成網際間 (Inter-network) 超大型網路。這些機構包括了商業組織、政府、學術單位、研究單位、軍事組織及各個大大小小民間企業所建構的網路，它們彼此間以快速的骨幹網路 (Back-bone) 連接，並且採用相同的通訊機制交換訊息。
          </p>
        </div>
      </div>
    </section>

    <!-- Network Types -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.2s">
      <h3 class="text-4xl font-bold text-blue-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
        網際網路結構
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">學術網路</p>
          <p class="text-sm text-blue-100">Academic</p>
        </div>
        <div class="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">商業網路</p>
          <p class="text-sm text-green-100">Commercial</p>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">政府網路</p>
          <p class="text-sm text-purple-100">Government</p>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">研究網路</p>
          <p class="text-sm text-orange-100">Research</p>
        </div>
        <div class="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">企業網路</p>
          <p class="text-sm text-red-100">Enterprise</p>
        </div>
        <div class="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">軍事網路</p>
          <p class="text-sm text-pink-100">Military</p>
        </div>
        <div class="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">ISP 服務商</p>
          <p class="text-sm text-cyan-100">Provider</p>
        </div>
        <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-xl hover-lift shadow-md hover:shadow-xl transition">
          <p class="font-bold text-lg mb-1">民間網路</p>
          <p class="text-sm text-indigo-100">Private</p>
        </div>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border-2 border-yellow-300 hover-lift">
        <div class="text-left">
          <p class="text-4xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-3">TCP/IP</p>
          <p class="text-xl font-bold text-gray-800 mb-2">骨幹網路 (Backbone Network)</p>
          <div class="h-1 w-16 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full mb-3"></div>
          <p class="text-gray-700 leading-relaxed">
            上圖展示了網際網路如何將各種不同的網路連接在一起，形成一個全球性的網路環境
          </p>
        </div>
      </div>
      <p class="text-gray-700 leading-relaxed mt-6 text-left font-medium">
        這些網路間共同的通訊機制，稱為<span class="text-blue-600 font-bold">通訊協定</span>。目前 Internet 上採用的通訊協定為 <span class="text-blue-600 font-bold">TCP/IP</span> (Transmission Control Protocol/Internet Protocol)。
      </p>
    </section>

    <!-- Internet Services -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
      <h2 class="text-4xl font-bold text-blue-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
        網際網路的主要服務
      </h2>
      <p class="text-gray-700 leading-relaxed mb-8 text-lg">
        通過這樣的連線結構，就可以在上面提供各式各樣的連線服務，Internet 上面目前最主要的服務有以下項目：
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-blue-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-blue-700 mb-2">全球資訊網 WWW</p>
          <p class="text-gray-600">World Wide Web - 最廣泛使用的網路服務</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-green-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-green-700 mb-2">即時傳訊</p>
          <p class="text-gray-600">Instant Messaging - MSN, Yahoo Messenger, ICQ</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-purple-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-purple-700 mb-2">電子郵件</p>
          <p class="text-gray-600">E-mail - 最傳統且重要的通訊方式</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-orange-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-orange-700 mb-2">檔案傳輸 FTP</p>
          <p class="text-gray-600">File Transfer Protocol - 檔案傳輸協定</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-red-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-red-700 mb-2">電子佈告欄 BBS</p>
          <p class="text-gray-600">Bulletin Board System - 網路討論區</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-pink-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-pink-700 mb-2">網路論壇</p>
          <p class="text-gray-600">News - 新聞群組與討論區</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-cyan-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-cyan-700 mb-2">終端模擬</p>
          <p class="text-gray-600">Telnet - 遠端登入服務</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-indigo-600 hover:shadow-xl transition">
          <p class="font-bold text-xl text-indigo-700 mb-2">小地鼠資訊系統</p>
          <p class="text-gray-600">Gopher - 已被 WWW 取代，幾無使用</p>
        </div>
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-yellow-600 hover:shadow-xl transition md:col-span-2 lg:col-span-1">
          <p class="font-bold text-xl text-yellow-700 mb-2">檔案搜尋</p>
          <p class="text-gray-600">Archie - 檔案查找系統，已被 WWW 的搜尋引擎取代</p>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
      <h2 class="text-4xl font-bold text-blue-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
        網際網路的起源
      </h2>
      <p class="text-gray-700 leading-relaxed mb-10 text-lg text-left">
        網際網路的發展歷程是一段充滿創新與突破的歷史，從軍事用途的實驗性網路，演變成為影響全人類的全球性通訊基礎設施。以下是網際網路發展的重要里程碑：
      </p>

      <div class="space-y-6">
        <!-- 1960s -->
        <div class="bg-gradient-to-r from-purple-50 to-purple-100 border-l-8 border-purple-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-purple-700 mb-3">📅 1960 年代初期</h4>
          <p class="text-gray-700 leading-relaxed">
            在冷戰時期，美國國防部高級研究計劃局（ARPA - Advanced Research Projects Agency）開始構思一個分散式網路系統。這個構想來自於Paul Baran提出的分散式網路概念，目的是建立一個即使部分節點被摧毀，仍能保持通訊的網路架構。
          </p>
        </div>

        <!-- 1969 -->
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-8 border-blue-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-blue-700 mb-3">📅 1969 年 - ARPANET 誕生</h4>
          <p class="text-gray-700 leading-relaxed mb-4">
            ARPANET（阿帕網）正式建立，這是網際網路的前身。最初連接了四個節點：
          </p>
          <ul class="grid grid-cols-2 gap-3 mb-4">
            <li class="bg-white rounded-lg p-3 text-sm text-gray-700 border-l-3 border-blue-400">🏫 加州大學洛杉磯分校（UCLA）</li>
            <li class="bg-white rounded-lg p-3 text-sm text-gray-700 border-l-3 border-blue-400">🏢 史丹佛研究所（SRI）</li>
            <li class="bg-white rounded-lg p-3 text-sm text-gray-700 border-l-3 border-blue-400">🎓 加州大學聖塔芭芭拉分校（UCSB）</li>
            <li class="bg-white rounded-lg p-3 text-sm text-gray-700 border-l-3 border-blue-400">🏛️ 猶他大學（University of Utah）</li>
          </ul>
          <p class="text-gray-700 leading-relaxed font-medium">
            1969年10月29日，第一條訊息從UCLA發送到SRI，雖然只傳送了「LO」兩個字母（原本要傳送「LOGIN」），但這標誌著網路通訊的歷史性突破。
          </p>
        </div>

        <!-- 1970s -->
        <div class="bg-gradient-to-r from-green-50 to-green-100 border-l-8 border-green-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-green-700 mb-4">📅 1970 年代 - TCP/IP 協定的誕生</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="bg-white rounded-lg p-4 border-l-3 border-green-400"><strong>1970年：</strong> Robert Kahn和Vinton Cerf開始開發TCP/IP 通訊協定。這個協定解決了不同網路之間無法互通的問題，成為網際網路的核心技術基礎。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-green-400"><strong>1972年：</strong> Ray Tomlinson發明了電子郵件（Email），並選擇了「@」符號來分隔使用者名稱和主機名稱，這個設計沿用至今。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-green-400"><strong>1973年：</strong> ARPANET首次進行國際連線，連接了英國和挪威的節點，網際網路開始走向國際化。</li>
          </ul>
        </div>

        <!-- 1980s -->
        <div class="bg-gradient-to-r from-orange-50 to-orange-100 border-l-8 border-orange-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-orange-700 mb-4">📅 1980 年代 - 網路擴展與標準化</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="bg-white rounded-lg p-4 border-l-3 border-orange-400"><strong>1981年：</strong> TCP/IP 協定正式成為ARPANET的標準通訊協定，取代了原本的NCP（Network Control Protocol）。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-orange-400"><strong>1983年1月1日：</strong> ARPANET全面採用TCP/IP協定，這一天被視為網際網路的誕生日。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-orange-400"><strong>1984年：</strong> 美國國家科學基金會（NSF）建立了NSFNET，這是一個高速骨幹網路，連接了美國各大學和研究機構。NSFNET的建立標誌著網際網路從軍事用途轉向學術和研究用途。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-orange-400"><strong>1986年：</strong> 網域名稱系統（DNS - Domain Name System）開始運作，讓人們可以使用易記的網域名稱（如www.example.com）來取代難記的IP位址。</li>
          </ul>
        </div>

        <!-- 1990s -->
        <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-8 border-red-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-red-700 mb-4">📅 1990 年代 - 商業化與WWW的興起</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="bg-white rounded-lg p-4 border-l-3 border-red-400"><strong>1990年：</strong> ARPANET正式退役，其功能由NSFNET和其他網路取代。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-red-400"><strong>1991年：</strong> Tim Berners-Lee在歐洲核子研究組織（CERN）發明了全球資訊網（World Wide Web, WWW），包括HTTP協定、HTML語言和第一個網頁瀏覽器。這項發明徹底改變了人們使用網際網路的方式。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-red-400"><strong>1993年：</strong> Mosaic瀏覽器問世，這是第一個圖形化網頁瀏覽器，讓一般使用者也能輕鬆瀏覽網頁。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-red-400"><strong>1995年：</strong> NSFNET正式退役，網際網路開始全面商業化。同年，Amazon和eBay等電子商務網站相繼成立，開啟了網路商業的新時代。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-red-400"><strong>1998年：</strong> Google公司成立，其搜尋引擎技術徹底改變了資訊檢索的方式。</li>
          </ul>
        </div>

        <!-- 2000s -->
        <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-8 border-indigo-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-indigo-700 mb-4">📅 2000 年代至今 - 網路2.0與行動網路</h4>
          <ul class="space-y-3 text-gray-700">
            <li class="bg-white rounded-lg p-4 border-l-3 border-indigo-400"><strong>2000年代初期：</strong> 寬頻網路開始普及，大幅提升了網路連線速度，促進了多媒體內容的發展。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-indigo-400"><strong>2004年：</strong> Facebook成立，標誌著社群網路時代的來臨。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-indigo-400"><strong>2007年：</strong> iPhone問世，開啟了行動網路和智慧型手機的時代，讓人們可以隨時隨地連上網際網路。</li>
            <li class="bg-white rounded-lg p-4 border-l-3 border-indigo-400"><strong>2010年代：</strong> 雲端運算、物聯網（IoT）、人工智慧等新技術與網際網路深度整合，進一步擴展了網路的應用範圍。</li>
          </ul>
        </div>

        <!-- Today -->
        <div class="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-8 border-cyan-600 rounded-xl p-8 hover-lift shadow-md hover:shadow-lg transition">
          <h4 class="text-2xl font-bold text-cyan-700 mb-3">🌍 現今</h4>
          <p class="text-gray-700 leading-relaxed font-medium">
            網際網路已經成為人類社會不可或缺的基礎設施，從通訊、商業、教育、娛樂到政府服務，幾乎所有領域都依賴網際網路。全球有超過<span class="text-cyan-600 font-bold">50億人</span>使用網際網路，網際網路已經徹底改變了人類的生活方式。
          </p>
        </div>
      </div>
    </section>

    <!-- Important People -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.5s">
      <h2 class="text-4xl font-bold text-blue-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
        重要人物
      </h2>
      <p class="text-gray-700 leading-relaxed mb-8 text-lg">
        網際網路的發展是許多傑出人物共同努力的成果，他們在不同階段做出了關鍵貢獻：
      </p>
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover-lift p-6 border-l-8 border-blue-400">
          <p class="font-bold text-2xl mb-2">J.C.R. Licklider</p>
          <p class="text-blue-50 leading-relaxed">👨‍💼 提出「星際電腦網路」（Intergalactic Computer Network）概念，被譽為<span class="font-bold">網際網路概念之父</span>，他在1960年代就預見了全球電腦網路互連的願景</p>
        </div>
        <div class="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-xl shadow-lg hover-lift p-6 border-l-8 border-green-400">
          <p class="font-bold text-2xl mb-2">Paul Baran</p>
          <p class="text-green-50 leading-relaxed">👨‍🔬 提出分散式網路架構概念，設計了能夠在部分節點失效時仍能運作的網路結構，為<span class="font-bold">ARPANET奠定了理論基礎</span></p>
        </div>
        <div class="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-xl shadow-lg hover-lift p-6 border-l-8 border-purple-400">
          <p class="font-bold text-2xl mb-2">Robert Kahn 與 Vinton Cerf</p>
          <p class="text-purple-50 leading-relaxed">🔧 共同開發TCP/IP通訊協定，被稱為<span class="font-bold">網際網路技術之父</span>，他們制定的標準至今仍是網際網路的核心技術</p>
        </div>
        <div class="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-xl shadow-lg hover-lift p-6 border-l-8 border-red-400">
          <p class="font-bold text-2xl mb-2">Tim Berners-Lee</p>
          <p class="text-red-50 leading-relaxed">📄 發明全球資訊網（WWW），包括HTTP、HTML和第一個網頁瀏覽器，被稱為<span class="font-bold">WWW之父</span></p>
        </div>
        <div class="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white rounded-xl shadow-lg hover-lift p-6 border-l-8 border-orange-400">
          <p class="font-bold text-2xl mb-2">Ray Tomlinson</p>
          <p class="text-orange-50 leading-relaxed">📧 發明電子郵件（Email），選擇了<span class="font-bold">「@」</span>符號作為電子郵件地址的分隔符號，這個設計沿用至今</p>
        </div>
      </div>
      <div class="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-8 border-yellow-500 rounded-xl">
        <p class="text-gray-700 leading-relaxed">
          <strong class="text-yellow-700">💡 說明：</strong>「網際網路之父」這個稱號有時會用來指不同的人物，因為網際網路的發展是多階段、多層次的過程。Licklider 提出了概念願景，而 Kahn 和 Cerf 則實現了關鍵的技術標準，他們都是網際網路發展歷程中不可或缺的重要人物。
        </p>
      </div>
    </section>

    <!-- Protocols -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.6s">
      <h2 class="text-4xl font-bold text-blue-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
        通訊協定 Protocols
      </h2>
      
      <div class="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl hover-lift">
        <h3 class="text-3xl font-bold text-white mb-6">🔌 TCP/IP 通訊協定</h3>
        <div class="space-y-6">
          <div class="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
            <p class="text-lg leading-relaxed text-white">
              電腦網路的通訊主要是依靠所謂的<span class="font-bold text-yellow-200">通訊協定</span>，通訊協定指的是電腦之間傳送訊息的一種準則規範，依據相同的標準，電腦之間傳送的訊息才能互相溝通。
            </p>
          </div>
          <div class="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
            <p class="text-lg font-medium mb-4 text-white">目前 Internet 上面所依循的標準為：</p>
            <div class="space-y-3">
              <div class="bg-black bg-opacity-40 rounded-lg p-4 border-l-4 border-yellow-300">
                <p class="font-bold text-xl text-white">TCP (Transmission Control Protocol)</p>
                <p class="text-yellow-100">傳輸控制協定</p>
              </div>
              <div class="bg-black bg-opacity-40 rounded-lg p-4 border-l-4 border-yellow-300">
                <p class="font-bold text-xl text-white">IP (Internet Protocol)</p>
                <p class="text-yellow-100">網際網路協定</p>
              </div>
            </div>
          </div>
          <div class="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
            <p class="text-lg leading-relaxed text-white">
              合稱 <span class="font-bold text-2xl text-yellow-200">TCP/IP</span>，這是在 <span class="font-bold text-yellow-200">1970 年</span>由 <span class="font-bold text-yellow-200">Robert Kahn</span> 和 <span class="font-bold text-yellow-200">Vinton Cerf</span> 制定的標準，至今仍是網際網路通訊的核心基礎。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-20 pt-12 border-t-2 border-gray-300 text-center text-gray-600 animate-fade-in-up" style="animation-delay: 0.7s">
      <p class="text-lg font-semibold mb-2">© 2026 認識網際網路</p>
      <p class="text-sm">Internet Knowledge</p>
      <div class="mt-4 flex justify-center gap-2">
        <span class="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
        <span class="inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
        <span class="inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
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
      // when opened, add animation class
      if (!isOpen) {
        _navMobile.classList.add('open')
      } else {
        _navMobile.classList.remove('open')
      }
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
