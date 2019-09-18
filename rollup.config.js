const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const {
  uglify
} = require('rollup-plugin-uglify');
var Progress =  require('node-progress').get();

const p = new Progress();
p.start();
async function build(outputOptions) {

  let _inputOptions = {
    input: __dirname + `/src/${outputOptions.entry}.ts`,
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      resolve(),
      buble(),
      commonjs()
    ]

  };
  if (outputOptions.format == 'umd') {

    // _inputOptions.plugins.push(uglify({
    //   compress: {
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     warnings: false
    //   }
    // }))

  }
  // create a bundle
  // console.log(_inputOptions);
  
  const bundle = await rollup.rollup(_inputOptions);


  const {
    code,
    map
  } = await bundle.generate(outputOptions);

  await bundle.write(outputOptions);
}


async function buildEntry(name) {

  await build({
    file: __dirname + `/lib/${name}-es.js`,
    entry:name,
    format: 'es'
  });

 await build({
    file: __dirname + `/lib/${name}.js`,
    entry:name,
    exports: 'named',
    name: 'randomModule',
    format: 'umd'
  });
  p.finish();
}

buildEntry('index')