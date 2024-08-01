# python module

## __init__.py
* 標記目錄為 Python 包
    * 使目錄被認為是包，可通過 import 語句導入。
* 初始化包
    * 包含初始化代碼，包被導入時自動執行。
* 控制包的導入行為
    * 使用 __all__ 列表定義使用 from package import * 時導入的模塊。
* 組織代碼結構
    * 使包內部模塊更容易相互導入，保持代碼結構清晰。