// parseApiError.ts
// Location: src/parseApiError.ts
/**
 * Parses API error responses and returns the appropriate user-friendly message.
 * Maps backend error codes to frontend error definitions.
 */

import type { ErrorsType } from "./content/content";

// Type for API error response
interface ApiErrorResponse {
    errcode?: string;
    code?: string;
    message?: string;
    error?: string;
}

// Backend error code to frontend error key mapping
// Maps backend errcode values to the keys in the errors object
const ERROR_CODE_MAP: Record<string, string> = {
    // File errors
    EMPTY_FILE: "EMPTY_FILE",
    FILE_TOO_LARGE: "FILE_TOO_LARGE",
    FILE_CORRUPT: "FILE_CORRUPT",
    FILE_NOT_FOUND: "FILE_NOT_FOUND",
    NO_FILES_PROVIDED: "NO_FILES_PROVIDED",
    NO_FILES_SELECTED: "NO_FILES_SELECTED",
    NOT_SUPPORTED_TYPE: "NOT_SUPPORTED_TYPE",

    // Upload limits
    MAX_FILES_EXCEEDED: "MAX_FILES_EXCEEDED",
    ERR_UPLOAD_COUNT: "ERR_UPLOAD_COUNT",
    MAX_PAGES_EXCEEDED: "MAX_PAGES_EXCEEDED",
    MAX_IMAGES_EXCEEDED: "MAX_IMAGES_EXCEEDED",
    IMAGE_TOO_LARGE: "IMAGE_TOO_LARGE",
    TOTAL_SIZE_EXCEEDED: "TOTAL_SIZE_EXCEEDED",
    TOO_MANY_FRAMES: "TOO_MANY_FRAMES",

    // PDF errors
    PASSWORD_REQUIRED: "PASSWORD_REQUIRED",
    INCORRECT_PASSWORD: "INCORRECT_PASSWORD",
    MISSING_FONTS: "MISSING_FONTS",
    INVALID_IMAGE_DATA: "INVALID_IMAGE_DATA",
    SECURITY_RISK: "SECURITY_RISK",

    // Format/options errors
    FORMAT_REQUIRED: "FORMAT_REQUIRED",
    INVALID_FORMAT: "INVALID_FORMAT",
    INVALID_INPUT: "INVALID_INPUT",
    INVALID_MODE: "INVALID_MODE",
    INVALID_QUALITY: "INVALID_QUALITY",
    INVALID_FIT_MODE: "INVALID_FIT_MODE",
    INVALID_DIMENSION: "INVALID_DIMENSION",
    DIMENSION_TOO_LARGE: "DIMENSION_TOO_LARGE",
    INVALID_PAGE_NUMBER: "INVALID_PAGE_NUMBER",
    INVALID_DELAY: "INVALID_DELAY",
    DELAY_TOO_LONG: "DELAY_TOO_LONG",

    // Conversion errors
    CONVERSION_ERROR: "CONVERSION_ERROR",
    INTERNAL_ERROR: "INTERNAL_ERROR",
    PERMISSION_ERROR: "PERMISSION_ERROR",

    // Usage limits
    MAX_DAILY_USAGE: "MAX_DAILY_USAGE",

    // Network
    ERR_NETWORK: "ERR_NETWORK",

    // Legacy mappings (old backend codes → new frontend keys)
    ERR_EMPTY_FILE: "EMPTY_FILE",
    ERR_FILE_SIZE_LIMIT_EXCEEDED: "FILE_TOO_LARGE",
    ERR_FILE_CORRUPT: "FILE_CORRUPT",
    ERR_MISSING_FONTS: "MISSING_FONTS",
    ERR_INVALID_IMAGE_DATA: "INVALID_IMAGE_DATA",
    ERR_SECURITY_RISK: "SECURITY_RISK",
    ERR_MAX_FILES_EXCEEDED: "MAX_FILES_EXCEEDED",
    ERR_NO_FILES_SELECTED: "NO_FILES_SELECTED",
    ERR_UNKNOWN: "UNKNOWN_ERROR",
    ERR_MAX_PAGES_EXCEEDED: "MAX_PAGES_EXCEEDED",
    ERR_MAX_IMAGES_EXCEEDED: "MAX_IMAGES_EXCEEDED",
    ERR_IMAGE_TOO_LARGE: "IMAGE_TOO_LARGE",
    ERR_TOTAL_SIZE_EXCEEDED: "TOTAL_SIZE_EXCEEDED",
};

/**
 * Parse an API error response and return the appropriate error message.
 *
 * @param errorData - The error data from the API response
 * @param errors - The errors object containing all error definitions
 * @returns The user-friendly error message
 */
export function parseApiError(
    errorData: ApiErrorResponse | null | undefined,
    errors: ErrorsType
): string {
    if (!errorData) {
        return errors.UNKNOWN_ERROR?.message || "An unknown error occurred.";
    }

    // Get the error code from the response (backend uses 'errcode' or 'code')
    const errorCode = errorData.errcode || errorData.code;

    if (errorCode) {
        // Map the backend error code to frontend error key
        const frontendErrorKey = ERROR_CODE_MAP[errorCode];

        if (frontendErrorKey && errors[frontendErrorKey as keyof ErrorsType]) {
            const error = errors[frontendErrorKey as keyof ErrorsType];

            // If the backend provided a specific message, append it for more context
            if (errorData.message && !error.message.includes(errorData.message)) {
                // For certain errors, include the backend's specific message
                if (["CONVERSION_ERROR", "INVALID_INPUT", "INTERNAL_ERROR"].includes(frontendErrorKey)) {
                    return `${error.message} (${errorData.message})`;
                }
            }

            return error.message;
        }

        // If we have a code but no mapping, try to use it directly
        if (errors[errorCode as keyof ErrorsType]) {
            return errors[errorCode as keyof ErrorsType].message;
        }
    }

    // If the backend provided a message directly, use it
    if (errorData.message) {
        return errorData.message;
    }

    // Legacy: check for 'error' field
    if (errorData.error) {
        return errorData.error;
    }

    // Fallback to unknown error
    return errors.UNKNOWN_ERROR?.message || "An unknown error occurred.";
}

/**
 * Check if an error code indicates a password is required.
 * Used for special handling of password-protected PDFs.
 */
export function isPasswordRequired(errorData: ApiErrorResponse | null | undefined): boolean {
    if (!errorData) return false;
    const code = errorData.errcode || errorData.code;
    return code === "PASSWORD_REQUIRED";
}

/**
 * Check if an error is recoverable (user can fix it).
 * Non-recoverable errors are server-side issues.
 */
export function isRecoverableError(errorData: ApiErrorResponse | null | undefined): boolean {
    if (!errorData) return false;

    const code = errorData.errcode || errorData.code;

    const nonRecoverableErrors = [
        "INTERNAL_ERROR",
        "CONVERSION_ERROR",
        "PERMISSION_ERROR",
        "ERR_NETWORK",
    ];

    return !nonRecoverableErrors.includes(code || "");
}

export default parseApiError;