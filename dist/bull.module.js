"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BullModule_1;
const common_1 = require("@nestjs/common");
const bull_providers_1 = require("./bull.providers");
let BullModule = BullModule_1 = class BullModule {
    static forRoot(options) {
        const providers = bull_providers_1.createQueues([].concat(options));
        return {
            module: BullModule_1,
            components: providers,
            exports: providers,
        };
    }
};
BullModule = BullModule_1 = __decorate([
    common_1.Module({})
], BullModule);
exports.BullModule = BullModule;
