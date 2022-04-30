// JSDoc : JS 코드를 TS에서 사용하고 싶을 때, JS코드를 수정하지 않고 코멘트 만으로도 TS에서 사용가능하도록 함

// @ts-check
/**
 * 프로젝트 초기화
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true
}

/**
 * 프로그램 종료
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1
}