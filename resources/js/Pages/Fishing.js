const Fishing = () => {
    return (
        <>

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />

            </head>

            <body>

                <div id="outer">
                    <div id="middle">
                        <div id="container" style="position:relative;width:980px;height:545px;top:-50%;margin:0 auto;"></div>
                        <div id="msg"></div>
                    </div>
                </div>
                <div id="fps" style="position:absolute;top:0;left:0;color:#fff;"></div>

            </body>
        </>
    );
}

export default Fishing;
