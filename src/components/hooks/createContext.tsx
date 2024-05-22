// Copyright (c) Meta Platforms, Inc. and affiliates.
// All rights reserved.

// This source code is licensed under the license found in the
// LICENSE file in the root directory of this source tree.

import { createContext } from "react";
import { modelInputProps } from "../helpers/Interfaces";

interface contextProps {
  clicks: [
    clicks: modelInputProps[] | null,
    setClicks: (e: modelInputProps[] | null) => void
  ];
  image: [
    image: HTMLImageElement | null,
    setImage: (e: HTMLImageElement | null) => void
  ];
  maskImg: [
    maskImg: HTMLImageElement | null,
    setMaskImg: (e: HTMLImageElement | null) => void
  ];
  btn_click:[
    btn_click: number  ,
    set_btn_click: (e: number  | null) => void
  ],
  click_position:[
    btn_click: number[] |null  ,
    set_btn_click: (e: number[]  | null) => void
  ]
}

const AppContext = createContext<contextProps | null>(null);

export default AppContext;