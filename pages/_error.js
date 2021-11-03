import Layout from "../components/Layout";

export default ({statusCode}) => (
    <Layout title="Error!!">
        {statusCode ? `Could not load your data: ${statusCode}`
            : <p>Couldn't get that page, sorry!</p>}
    </Layout>
)
