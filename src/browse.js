import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Navigation -->
    <nav id="site-nav" class="mb-6 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm animate-fade-in-down">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <a href="index.html" class="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">認識網際網路</a>
          <a href="www.html" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">全球資訊網 WWW</a>
          <a href="browse.html" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600">瀏覽器 Browser</a>
          <a href="#" class="hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">更多頁面</a>
        </div>
        <button id="nav-toggle" class="md:hidden p-2 rounded-md bg-white/30">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div id="nav-mobile" class="nav-mobile md:hidden mt-3 hidden flex-col items-center gap-2">
        <a href="index.html" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">認識網際網路</a>
        <a href="www.html" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">全球資訊網 WWW</a>
        <a href="browse.html" class="w-full text-center px-4 py-2 rounded-md bg-purple-600 text-white">瀏覽器 Browser</a>
        <a href="#" class="w-full text-center px-4 py-2 rounded-md bg-gray-100 text-gray-800">更多頁面</a>
      </div>
    </nav>

    <!-- Header -->
    <header class="mb-16 text-center animate-fade-in-down">
      <div class="inline-block mb-6">
        <div class="flex items-center justify-center h-20 w-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg animate-pulse-glow">
          <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 14a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H4a1 1 0 00-1 1v2z"/>
          </svg>
        </div>
      </div>
      <h1 class="text-6xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">瀏覽器</h1>
      <h1 class="text-5xl font-bold text-gray-800 mb-4">Browser</h1>
      <p class="text-2xl text-gray-600 font-light">探索網頁瀏覽器的發展與應用</p>
      <div class="mt-8 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
    </header>

    <!-- What is Browser -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.1s">
      <div class="bg-white rounded-xl shadow-md hover-lift p-8 border-l-8 border-purple-600">
        <h2 class="text-4xl font-bold text-purple-600 mb-6 flex items-center">
          <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
          瀏覽器 Browser 介紹
        </h2>
        <div class="space-y-6 text-left">
          <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-400">
            <p class="text-gray-700 leading-relaxed">
              在個人電腦上面用來查看網頁的程式稱為<span class="text-purple-600 font-bold">瀏覽器 Browser</span>，它是一個軟體的種類名稱。網頁本身基本上只是一個放在網路主機上的純文字檔案，文字內容主要依照網頁的描述語法：<span class="text-purple-600 font-bold">HTML 或 XHTML</span> 格式撰寫。使用者電腦透過瀏覽器從網頁主機取得網頁的檔案後，也是由瀏覽器加以解讀，然後才產生網頁的顯示畫面。
            </p>
          </div>

          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <p class="text-gray-700 leading-relaxed mb-4 font-medium">
              例如：瀏覽器依據網址取得網頁的檔案後，如果檔案內容裡面有這段文字：
            </p>
            <div class="bg-white rounded-md p-4 border-l-4 border-blue-600 font-mono text-sm text-gray-800 mb-4">
              &lt;H1&gt;Welcome&lt;/H1&gt;
            </div>
            <p class="text-gray-700 leading-relaxed">
              其中 <span class="font-mono text-purple-600">&lt;H1&gt;</span> 和 <span class="font-mono text-purple-600">&lt;/H1&gt;</span> 是代表使用 H1 的語法標籤，在 HTML 語法裡 H1 代表<span class="font-bold">標題一</span>的文字格式。瀏覽器解讀到這段文字之後，便以標題一的設定格式顯示 Welcome 這個字。而在使用者電腦的畫面上，只會看到 <span class="font-bold">Welcome</span> 這個字，而不會出現 <span class="font-mono">&lt;H1&gt;</span> 和 <span class="font-mono">&lt;/H1&gt;</span> 這兩個標籤。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Browser Functions -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.2s">
      <h2 class="text-4xl font-bold text-purple-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
        瀏覽器的主要功能
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg hover-lift p-8">
          <div class="text-4xl mb-4">🔗</div>
          <h3 class="text-2xl font-bold mb-4">取得網頁檔案</h3>
          <p class="leading-relaxed">透過網址 (URL) 取得網頁檔案，並與遠端伺服器通訊以下載網頁內容。</p>
        </div>
        <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl shadow-lg hover-lift p-8">
          <div class="text-4xl mb-4">🎨</div>
          <h3 class="text-2xl font-bold mb-4">解讀與顯示</h3>
          <p class="leading-relaxed">依照網頁檔案內容的語法描述 (HTML/CSS)，產生美化的顯示畫面供使用者查看。</p>
        </div>
      </div>
    </section>

    <!-- Popular Browsers -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
      <h2 class="text-4xl font-bold text-purple-600 mb-8 flex items-center">
        <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
        常用的瀏覽器
      </h2>
      <div class="space-y-6">
        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-blue-600">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div class="w-full md:w-32 flex-shrink-0">
              <img src="/InternetExplorer_1.png" alt="Internet Explorer" class="w-full rounded-lg shadow-sm">
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-blue-700 mb-2">Microsoft Internet Explorer (IE)</h3>
              <p class="text-gray-700 leading-relaxed">
                Internet Explorer，簡稱 IE，Microsoft 所推出的上網瀏覽軟體。微軟採用內建在作業系統的策略，將 Netscape Navigator 打敗，爭得市場佔有率。但在 6.0 版獨佔市場多年後，未求更新改進，也造成許多安全性的問題，使得許多功能更好用、安全性更加強、更符合 W3C 標準的瀏覽器得以出頭。
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-red-600">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div class="w-full md:w-32 flex-shrink-0">
              <img src="/firefox.png" alt="Mozilla Firefox" class="w-full rounded-lg shadow-sm">
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-red-700 mb-2">Mozilla Firefox</h3>
              <p class="text-gray-700 leading-relaxed mb-2">
                Mozilla Firefox，中文簡稱<span class="font-bold">火狐</span>，由 Mozilla 基金會與社群共同開發的瀏覽器。它是開放原始碼的自由軟體，支援多種作業系統平台，並且有七十種以上的語言可以選擇安裝。
              </p>
              <p class="text-gray-700 leading-relaxed mb-2">
                它具備許多突出的功能，提供了許多上網瀏覽的全新體驗，因此在 2004 年推出後，便成了網路上最熱門的瀏覽軟體。
              </p>
              <p class="text-sm text-gray-500">官方網站：http://moztw.org/</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-blue-500">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div class="w-full md:w-32 flex-shrink-0">
              <img src="/googleChrome.png" alt="Google Chrome" class="w-full rounded-lg shadow-sm">
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-blue-600 mb-2">Google Chrome</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                由 Google 所開發的網頁瀏覽器，2008 年 6 月被評選為最佳 Windows 應用程式。它以<span class="font-bold">穩定性、速度和安全性</span>，及簡單且有效率的使用介面作為目標。
              </p>
              <p class="text-gray-700 leading-relaxed mb-2">
                配合 Google 拓展網路服務的版圖，它的使用率和重要性也逐步增加。
              </p>
              <p class="text-sm text-gray-500">官方網站：http://www.google.com/chrome</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-red-500">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div class="w-full md:w-32 flex-shrink-0">
              <img src="/opera.png" alt="Opera" class="w-full rounded-lg shadow-sm">
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-red-600 mb-2">Opera</h3>
              <p class="text-gray-700 leading-relaxed mb-2">
                Opera 是由挪威最大的電信公司 Telenor 的研究小組所開發，因其優良的多頁面瀏覽特性、快捷列和工具列設定而聞名，曾號稱是地球上最快的瀏覽器。
              </p>
              <p class="text-gray-700 leading-relaxed mb-2">
                Opera 也創造了很多瀏覽器的新功能，推動其他瀏覽器的跟進發展。
              </p>
              <p class="text-gray-700 leading-relaxed font-medium mb-2">
                2009 年台灣網友推出了 Opera 台灣版，命名為「<span class="text-red-600 font-bold">三太子</span>」(Nalakuvara)，獲 Opera 官方認證。
              </p>
              <p class="text-sm text-gray-500">官方網站：http://www.opera.com</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md hover-lift p-6 border-t-4 border-gray-400">
          <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div class="w-full md:w-32 flex-shrink-0">
              <img src="/safari512px.png" alt="Safari" class="w-full rounded-lg shadow-sm">
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-700 mb-2">Safari</h3>
              <p class="text-gray-700 leading-relaxed">
                Safari 是由 Apple 公司所開發的瀏覽器，內建於 Mac OS X，也是 iPhone、iPod Touch 和 iPad 的指定瀏覽器，2007 年推出支援 Windows 版本。
              </p>
              <p class="text-sm text-gray-500 mt-2">官方網站：http://www.apple.com/tw/safari</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Browser Differences -->
    <section class="mb-16 animate-fade-in-up" style="animation-delay: 0.4s">
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-md hover-lift p-8 border-l-8 border-purple-600">
        <h2 class="text-4xl font-bold text-purple-600 mb-6 flex items-center">
          <span class="w-2 h-2 bg-purple-600 rounded-full mr-4"></span>
          瀏覽器的差異性
        </h2>
        <p class="text-gray-700 leading-relaxed text-left">
          雖然瀏覽器都是依據 <span class="text-purple-600 font-bold">W3C 的標準</span>產生網頁的畫面，但支援的程度並不完全一致。有些瀏覽器會加上自己設計的一些延伸語法，也造成使用上的不一致。加上瀏覽器版本的更新，支援的程度也會有所不同。
        </p>
        <p class="text-gray-700 leading-relaxed text-left mt-4">
          對網頁的設計者而言，必須注意到設計出來的結果，是否會在<span class="text-purple-600 font-bold">不同的瀏覽器上有所差異</span>。因此，跨瀏覽器的相容性測試和適配是網頁開發的重要環節。
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-20 pt-12 border-t-2 border-gray-300 text-center text-gray-600 animate-fade-in-up" style="animation-delay: 0.5s">
      <p class="text-lg font-semibold mb-2">© 2026 瀏覽器 Browser</p>
      <p class="text-sm">Browser Knowledge</p>
      <div class="mt-4 flex justify-center gap-2">
        <span class="inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
        <span class="inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
        <span class="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
      </div>
    </footer>
    </div>
    </div>
  \`

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
`
