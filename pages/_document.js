// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { html, head, errorHtml, chunks, styles, ...page, styleTags }
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
                <style>{`html { height: 100%; } /* custom! */`}</style>
                {this.props.styleTags}
            </Head>
            <body>
            <style>{`body { margin: 0; padding: 0; } /* custom! */`}</style>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
