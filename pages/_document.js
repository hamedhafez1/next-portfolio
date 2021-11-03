import Document, {Head, Main, NextScript} from "next/document";


class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta name="description" content="a site for my programming portfolio"/>
                <meta charSet="utf-8"/>
                <meta name="robots" content="noindex, nofollow"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            <style jsx>{`
              body {
                font-family: 'Roboto', sans-serif;
              }
            `}</style>
            </html>
        )
    }
}

export default MyDocument
