window.CKEDITOR_BASEPATH = `/build/node_modules/ckeditor/`


// Load your custom config.js file for CKEditor.
require(`!file-loader?context=${__dirname}&outputPath=node_modules/ckeditor/&name=[path][name].[ext]!./config.js`)

// Load your custom contents.css file in case you use iframe editor.
require(`!file-loader?context=${__dirname}&outputPath=node_modules/ckeditor/&name=[path][name].[ext]!./contents.css`)

// Load your custom styles.js file for CKEditor.
require(`!file-loader?context=${__dirname}&outputPath=node_modules/ckeditor/&name=[path][name].[ext]!./styles.js`)

// Load files from plugins.
require.context(
  '!file-loader?name=[path][name].[ext]!ckeditor/plugins/',
  true,
  /.*/
)

// Load CKEditor lang files.
require.context(
  '!file-loader?name=[path][name].[ext]!ckeditor/lang',
  true,
  /.*/
)

// Load skin.
require.context(
  '!file-loader?name=[path][name].[ext]!ckeditor/skins/moono-lisa',
  true,
  /.*/
)