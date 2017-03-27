import { IrisNativeClassBase, IrisMethodDefineDescriptor } from "../interface/IrisNativeClassBase";
import { IrisClass } from "../core/IrisClass";
import { IrisModule } from "../core/IrisModule";
import { IrisFloatClassTag } from "./IrisFloat";
import { IrisValue } from "../core/IrisValue";
import { IrisContextEnvironment } from "../core/IrisContextEnvironment";
import { IrisThreadInfo } from "../core/IrisThreadInfo";
export declare class IrisIntegerClass implements IrisNativeClassBase {
    native_class_name_define(): string;
    native_super_class_define(): IrisClass | undefined;
    native_upper_module_define(): IrisModule | undefined;
    native_alloc(): Object;
    native_class_define(): IrisMethodDefineDescriptor[];
    private static cast_operation(type, left_value, right_value);
    private static cmp_operation(type, left_value, right_value);
    private bit_operation(type, left_value, right_value);
    static add(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static sub(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static mul(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static div(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static mod(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static power(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static equal(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static not_equal(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static big_than(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static big_than_or_equal(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static less_than(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static less_than_or_equal(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static shr(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static sar(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static shl(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static sal(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static bit_xor(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static bit_or(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
    static bit_and(caller: IrisValue, parameters: IrisValue[], variable_parameters: IrisValue[], context: IrisContextEnvironment, thread_info: IrisThreadInfo): IrisValue;
}
export declare class IrisIntegerClassTag {
    integer: number;
    to_float(): IrisFloatClassTag;
    to_string(): string;
    constructor(integer: number);
    add(value: IrisIntegerClassTag): IrisIntegerClassTag;
    sub(value: IrisIntegerClassTag): IrisIntegerClassTag;
    mul(value: IrisIntegerClassTag): IrisIntegerClassTag;
    div(value: IrisIntegerClassTag): IrisIntegerClassTag;
    power(value: IrisIntegerClassTag): IrisIntegerClassTag;
    mod(value: IrisIntegerClassTag): IrisIntegerClassTag;
    shr(value: IrisIntegerClassTag): IrisIntegerClassTag;
    shl(value: IrisIntegerClassTag): IrisIntegerClassTag;
    sar(value: IrisIntegerClassTag): IrisIntegerClassTag;
    sal(value: IrisIntegerClassTag): IrisIntegerClassTag;
    bit_xor(value: IrisIntegerClassTag): IrisIntegerClassTag;
    bit_and(value: IrisIntegerClassTag): IrisIntegerClassTag;
    bit_or(value: IrisIntegerClassTag): IrisIntegerClassTag;
    equal(value: IrisIntegerClassTag): boolean;
    not_equal(value: IrisIntegerClassTag): boolean;
    big_than(value: IrisIntegerClassTag): boolean;
    big_than_or_equal(value: IrisIntegerClassTag): boolean;
    less_than(value: IrisIntegerClassTag): boolean;
    less_than_or_equal(value: IrisIntegerClassTag): boolean;
}
