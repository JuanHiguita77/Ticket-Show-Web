"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDTO = void 0;
const openapi = require("@nestjs/swagger");
class ResponseDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { success: { required: true, type: () => Boolean }, message: { required: true, type: () => String }, data: { required: false, type: () => Object } };
    }
}
exports.ResponseDTO = ResponseDTO;
//# sourceMappingURL=response.dto.js.map