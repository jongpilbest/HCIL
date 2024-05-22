// Copyright (c) Meta Platforms, Inc. and affiliates.
// All rights reserved.

// This source code is licensed under the license found in the
// LICENSE file in the root directory of this source tree.
const fs = require('fs');
// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true, // enable HMR on the server
    open: true,
    // These headers enable the cross origin isolation state
    // needed to enable use of SharedArrayBuffer for ONNX 
    // multithreading. 
    headers: {
    // "Cross-Origin-Opener-Policy": "same-origin",
     //"Cross-Origin-Embedder-Policy": "credentialless",
    //"Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    proxy:{
      '/test':{
        
        target:"https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large",
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/test': '' },

      },
      '/server':{
        target:"http://127.0.0.1:5000/test",
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/server': '' },
      }
    }
  },
  devtool: "cheap-module-source-map",
  externals: {
    'node:crypto': 'commonjs crypto'
}


});
