export default function Game(props) {
    return (
        <>
            <nav className="x-header navbar navbar-expand-lg -anon">
                <div className="container-fluid align-items-center h-100 position-relative">
                    <div id="headerBrand">
                        <a className="navbar-brand" href="/login">
                            <img className="-logo" src="https://slot123.net/wp-content/uploads/2022/04/ambbet-logo-3.png" alt="สล็อต Logo" />
                        </a>
                    </div>
                    <div id="headerContent">
                        {/* <ul className="nav -menu-wrapper ">
                            <li className="nav-item">
                                <a href="promotions.html" className="nav-link ">
                                    <div className="-img-wrapper">
                                        <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/ic-header-menu-promotion3860.png?v=1" className="-icon" alt="SourceSSL Menu icon promotion" width="30" height="30" />
                                    </div>
                                    <div className="-text">khuyến mãi</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="promotions.html" className="nav-link ">
                                    <div className="-img-wrapper">
                                        <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/ic-header-menu-promotion3860.png?v=1" className="-icon" alt="SourceSSL Menu icon promotion" width="30" height="30" />
                                    </div>
                                    <div className="-text">khuyến mãi</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="promotions.html" className="nav-link ">
                                    <div className="-img-wrapper">
                                        <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/ic-header-menu-promotion3860.png?v=1" className="-icon" alt="SourceSSL Menu icon promotion" width="30" height="30" />
                                    </div>
                                    <div className="-text">khuyến mãi</div>
                                </a>
                            </li>
                        </ul> */}

                        <div className="navbar-nav">
                            <div className="d-flex x-anon">
                                <a href="#loginModal" className="btn -btn-header-login" data-toggle="modal" data-target="#loginModal">
                                    <span className="-text-btn">Đăng nhập</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="main__content">
                <div className="x-main-container">
                    <div className="x-main-side-bar">
                        <div className="x-menu-provider js-tab-menu-provider -desktop-view">
                            <nav className="nav-menu" id="navbarCategory">
                                <ul className="nav nav-pills js-menu-container -nav-menu-container">
                                    <li className="nav-item -btn-register-container">
                                        <a href="#0" className="btn x-btn-register -sidebar" data-toggle="modal" data-target="#registerModal">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/button-gray-bg.png" className="-img" alt="SourceSSL Button image background" width="200" height="48" />
                                            <div className="-text-wrapper">
                                                <span className="-text">Đăng ký thành viên</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link -casino active">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-lc-checked.png" alt="SourceSSL Icon nav menu casino" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">CASINO</div>
                                                <div className="-text-nav-menu -title-trans">Sòng bạc trực tiếp</div>
                                                <div className="-text-nav-menu -title-mobile">Sòng bạc</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link -slot">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-ufaslot-checked.png" alt="SourceSSL Icon nav menu slot" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">SLOT</div>
                                                <div className="-text-nav-menu -title-trans">trò chơi slot</div>
                                                <div className="-text-nav-menu -title-mobile">Máy đánh bạc</div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#loginModal" className="nav-link -sport" data-toggle="modal" data-target="#loginModal">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-fishing-checked.png" alt="SourceSSL Icon nav menu skill-game" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">FISHING</div>
                                                <div className="-text-nav-menu -title-trans">Bắn cá</div>
                                                <div className="-text-nav-menu -title-mobile">Bắn cá</div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a href="#loginModal" className="nav-link -sport" data-toggle="modal" data-target="#loginModal">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-card-checked.png" alt="SourceSSL Icon nav menu skill-game" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">SKILL GAME</div>
                                                <div className="-text-nav-menu -title-trans">Kỹ năng trò chơi</div>
                                                <div className="-text-nav-menu -title-mobile">Kỹ năng trò chơi</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#loginModal" className="nav-link -sport" data-toggle="modal" data-target="#loginModal">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-sportsbook-check.png" alt="SourceSSL Icon nav menu sport" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">SPORT</div>
                                                <div className="-text-nav-menu -title-trans">กีฬา</div>
                                                <div className="-text-nav-menu -title-mobile">กีฬา</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#loginModal" className="nav-link -sport" data-toggle="modal" data-target="#loginModal">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-graph-checked.png" alt="SourceSSL Icon nav menu game graph" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">HotGraph</div>
                                                <div className="-text-nav-menu -title-trans">เกมกราฟ</div>
                                                <div className="-text-nav-menu -title-mobile">เกมกราฟ</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#loginModal" className="nav-link -sport" data-toggle="modal" data-target="#loginModal">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-esports-checked.png" alt="SourceSSL Icon nav menu esport" className="img-fluid -ic-menu" />
                                            <div className="-text-provider-wrapper">
                                                <div className="-text-nav-menu -title">E-SPORT</div>
                                                <div className="-text-nav-menu -title-trans">อีสปอร์ต</div>
                                                <div className="-text-nav-menu -title-mobile">อีสปอร์ต</div>
                                            </div>
                                        </a>
                                    </li> */}
                                </ul>
                                {/* <div className="-contact-wrapper">
                                    <div className="x-contact-us -text">
                                        <a href="/" className="-line-wrapper" target="_blank" rel="noopener noreferrer">
                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/ez-casino-ic-line-text.png" className="-line-img" title="SourceSSL" alt="SourceSSL รูปไอคอนไลน์" width="160" height="51" />
                                        </a>
                                    </div>
                                </div> */}
                            </nav>
                        </div>
                    </div>
                    <div className="x-main-content">
                        <div className="d-none d-lg-block">
                            <div className="x-feed-news-header">
                                <div className="-feed-news-inner-wrapper">
                                    <div className="-icon-container">
                                        <i className="fas fa-volume-up"></i>
                                    </div>
                                    <div className="-track">
                                        <div className="-track-item -duration-normal-content">
                                        .. Chào mừng bạn đến với ALLGAME, thế giới cờ bạc tốt nhất, bao gồm bóng đá, baccarat, máy đánh bạc, xổ số, hoàn tất việc gửi và rút tiền chỉ trong 10 giây ..  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="x-index-top-container" style={{
                            background: "url('')"
                        }}>

                            <div className="-index-inner-wrapper">
                                <div className="-heading-wrapper">
                                    <h1 className="-title"><span style={{
                                        color: "#a4a4a4"
                                    }}>Trang web sòng bạc &amp; baccarat trực tuyến, trang web cờ bạc số 1, vượt trội về mọi mặt, tiện lợi hơn từ mọi góc độ, chiều hướng mới, trang web trò chơi di động, một ví, có thể chơi mọi trò chơi. </span></h1>
                                </div>
                                <div className="-banner-wrapper">
                                    <div className="d-lg-none">
                                        <div className="x-feed-news-header">
                                            <div className="-feed-news-inner-wrapper">
                                                <div className="-icon-container">
                                                    <i className="fas fa-volume-up"></i>
                                                </div>

                                                <div className="-track">
                                                    <div className="-track-item -duration-normal-content">
                                                    .. Chào mừng bạn đến với ALLGAME, thế giới cờ bạc tốt nhất, bao gồm bóng đá, baccarat, máy đánh bạc, xổ số, hoàn tất việc gửi và rút tiền chỉ trong 10 giây ..</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="-games-provider-wrapper">
                                        <div className="-menu-index-page">
                                            <div data-menu-sticky="js-sticky-widget">
                                                <div className="x-menu-provider js-tab-menu-provider">

                                                    <nav className="nav-menu" id="navbarCategory">
                                                        <ul className="nav nav-pills js-menu-container -nav-menu-container">

                                                            <li className="nav-item">
                                                                <button className="nav-link -casino active">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-lc-checked.png" alt="SourceSSL Icon nav menu casino" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">CASINO</div>
                                                                        <div className="-text-nav-menu -title-trans">Sòng bạc trực tiếp</div>
                                                                        <div className="-text-nav-menu -title-mobile">Sòng bạc</div>
                                                                    </div>
                                                                </button>
                                                            </li>

                                                            <li className="nav-item">
                                                                <button className="nav-link -slot">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-ufaslot-checked.png" alt="SourceSSL Icon nav menu slot" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">SLOT</div>
                                                                        <div className="-text-nav-menu -title-trans">trò chơi slot</div>
                                                                        <div className="-text-nav-menu -title-mobile">Máy đánh bạc</div>
                                                                    </div>
                                                                </button>
                                                            </li>


                                                            <li className="nav-item">
                                                                <button className="nav-link -slot ">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-fishing-checked.png" alt="SourceSSL Icon nav menu fishing" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">FISHING</div>
                                                                        <div className="-text-nav-menu -title-trans">Bắn cá</div>
                                                                        <div className="-text-nav-menu -title-mobile">Bắn cá</div>
                                                                    </div>
                                                                </button>
                                                            </li>

                                                            {/* <li className="nav-item">
                                                                <button className="nav-link -skill-game ">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-card-checked.png" alt="SourceSSL Icon nav menu skill-game" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">SKILL GAME</div>
                                                                        <div className="-text-nav-menu -title-trans">สกิลเกมส์</div>
                                                                        <div className="-text-nav-menu -title-mobile">สกิลเกมส์</div>
                                                                    </div>
                                                                </button>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a href="#loginModal" className="nav-link -sport" data-toggle="modal" data-target="#loginModal">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-sportsbook-check.png" alt="SourceSSL Icon nav menu sport" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">SPORT</div>
                                                                        <div className="-text-nav-menu -title-trans">กีฬา</div>
                                                                        <div className="-text-nav-menu -title-mobile">กีฬา</div>
                                                                    </div>
                                                                </a>

                                                            </li>

                                                            <li className="nav-item">
                                                                <button className="nav-link -skill-game ">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-graph-checked.png" alt="SourceSSL Icon nav menu game graph" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">HotGraph</div>
                                                                        <div className="-text-nav-menu -title-trans">เกมกราฟ</div>
                                                                        <div className="-text-nav-menu -title-mobile">เกมกราฟ</div>
                                                                    </div>
                                                                </button>
                                                            </li>

                                                            <li className="nav-item">
                                                                <button className="nav-link -slot ">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/icn-esports-checked.png" alt="SourceSSL Icon nav menu esport" className="img-fluid -ic-menu" />
                                                                    <div className="-text-provider-wrapper">
                                                                        <div className="-text-nav-menu -title">E-SPORT</div>
                                                                        <div className="-text-nav-menu -title-trans">อีสปอร์ต</div>
                                                                        <div className="-text-nav-menu -title-mobile">อีสปอร์ต</div>
                                                                    </div>
                                                                </button>
                                                            </li> */}

                                                        </ul>

                                                        <div className="-contact-wrapper">
                                                            <div className="x-contact-us -text">
                                                                <a href="https://line.me/R/ti/p/@SourceSSL" className="-line-wrapper" target="_blank" rel="noopener noreferrer">
                                                                    <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/build/ez-casino-ic-line-text.png" className="-line-img" alt="SourceSSL รูปไอคอนไลน์" width="160" height="51" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="-games-index-page">
                                            <div className="-top-paragraph">
                                                <h2 className="-h2">Sòng bạc Baccarat trực tuyến cao cấp</h2>
                                                <h3 className="-h3">Game slot hàng đầu thế giới, làm giàu cùng SourceSSL</h3>
                                            </div>
                                            <div className="x-category-provider js-game-scroll-container js-game-container">
                                                <div className="x-category-provider js-game-scroll-container js-game-container">
                                                    <div className="-games-list-container">
                                                        <nav className="nav-menu" id="navbarProvider">
                                                            <ul className="nav nav-pills">
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <div className="x-game-badge-component -new -big" data-animatable="fadeInUp" data-delay="400">
                                                                                <span>New</span>
                                                                            </div>
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/asia-gaming-animation.png" className="-cover-img lazyload img-fluid" alt="ag" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">AG GAMING</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <div className="x-game-badge-component -popular -big" data-animatable="fadeInUp" data-delay="400">
                                                                                <span>Popular</span>
                                                                            </div>
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-sexy-bac-animation.webp" className="-cover-img lazyload img-fluid" alt="AE Sexy Casino" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">AE SEXY</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <div className="x-game-badge-component -popular -big" data-animatable="fadeInUp" data-delay="400">
                                                                                <span>Popular</span>
                                                                            </div>
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-sa-gaming-animation.webp" className="-cover-img lazyload img-fluid" alt="Sa-Gaming" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">SA GAMING</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <div className="x-game-badge-component -new -big" data-animatable="fadeInUp" data-delay="400" style={{
                                                                                background: "linear-gradient(180deg, #f28856, #f71c40)"
                                                                            }}>
                                                                                <span>Hot</span>
                                                                            </div>
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-dream-gaming-animation.webp" className="-cover-img lazyload img-fluid" alt="Dream-Gaming" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">DREAM GAMING</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-pretty-gaming-animation.webp" className="-cover-img lazyload img-fluid" alt="Pretty-Gaming" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">PRETTY GAMING</div>
                                                                    </div>
                                                                </li>




                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-ebet.webp" className="-cover-img lazyload img-fluid" alt="Ebet-Full" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">EBET GAMING</div>
                                                                    </div>
                                                                </li>

                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-allbet-full.webp" className="-cover-img lazyload img-fluid" alt="Allbet-Full" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">ALLBET</div>
                                                                    </div>
                                                                </li>

                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-big-gaming.webp" className="-cover-img lazyload img-fluid" alt="Big-Gaming" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">BIG GAMING</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-d88.webp" className="-cover-img lazyload img-fluid" alt="Green Dragon" width="364" height="231" />
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">Green Dragon</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">

                                                                            <picture>
                                                                                <source type="image/webp" srcSet="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-pt.webp" />
                                                                                <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-pt.webp" className="-cover-img lazyload img-fluid" alt="Pragmatic Play" width="364" height="231" />
                                                                            </picture>
                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">Pragmatic Play</div>
                                                                    </div>
                                                                </li>
                                                                <li className="nav-item -game-casino-macro-container">
                                                                    <div className="x-game-list-item-macro js-game-list-toggle -big " data-status="">
                                                                        <div className="-inner-wrapper">
                                                                            <picture>
                                                                                <source type="image/webp" srcSet="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-tv.webp" />
                                                                                <img src="https://slot123.net/wp-content/themes/PGSLOTTHEME2020-1/assets_user/EZ/images/game/banner-provider-tv.webp" className="-cover-img lazyload img-fluid" alt="betgame" width="364" height="231" />
                                                                            </picture>

                                                                            <div className="-overlay">
                                                                                <div className="-overlay-inner">
                                                                                    <div className="-wrapper-container">
                                                                                        <a href="#loginModal" className="-btn -btn-play js-account-approve-aware" data-toggle="modal" data-target="#loginModal">
                                                                                            <i className="fas fa-play"></i>
                                                                                            <span className="-text-btn">Vào để chơi</span>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="-title">BetGame</div>
                                                                    </div>
                                                                </li>

                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
