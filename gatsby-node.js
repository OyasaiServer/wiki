exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
    const config = getConfig()
    config.node = {
        child_process: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}