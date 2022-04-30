// declaration 파일 (.d.ts) : js파일을 사용할 수 있도록 형식을 선언해줌(타입을 알려줌)
interface Config {
    url: string
}

declare module "myPackage" {
    function init(config: Config): boolean
    function exit(code: number): number
}