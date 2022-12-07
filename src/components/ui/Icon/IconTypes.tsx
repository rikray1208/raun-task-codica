import {ReactComponent as ReloadIcon} from "../../../assets/reload.svg";
import {ReactComponent as DeleteIcon} from "../../../assets/delete.svg";
import {ReactComponent as AddIcon} from "../../../assets/plus.svg";
import React from "react";

export type IconType =
    | 'reload'
    | 'delete'
    | 'add';

export const IconTypes = new Map([
    ['reload', <ReloadIcon/>],
    ['delete', <DeleteIcon/>],
    ['add', <AddIcon />],

]);

export type IconSizeType = 'sm' | 'base' | 'xl';