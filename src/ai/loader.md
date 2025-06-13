`UnstructuredFileLoader` 是 [`LangChain`](https://python.langchain.com/) 中用来处理**非结构化文档文件**（比如 `.pdf`, `.docx`, `.html`, `.txt` 等）的一个数据加载器，基于 [`unstructured`](https://github.com/Unstructured-IO/unstructured) 库。

---

### ✅ 安装依赖

首先确保你安装了必要的依赖：

```bash
pip install unstructured langchain
```

如果处理 PDF、Word 等格式，还建议安装：

```bash
pip install "unstructured[all-docs]"
```

---

### 📄 使用示例

```python
from langchain_community.document_loaders import UnstructuredFileLoader

loader = UnstructuredFileLoader("example.pdf")
documents = loader.load()

for doc in documents:
    print(doc.page_content)  # 打印内容
```

如果你要加载多个文件：

```python
from langchain_community.document_loaders import UnstructuredFileLoader

file_paths = ["file1.pdf", "file2.docx", "file3.txt"]
all_docs = []

for path in file_paths:
    loader = UnstructuredFileLoader(path)
    all_docs.extend(loader.load())
```

---

### 📌 支持的格式（由 `unstructured` 决定）

包括但不限于：

* `.txt`, `.md`
* `.pdf`
* `.docx`, `.doc`
* `.pptx`
* `.html`
* `.eml`, `.msg`
* `.xlsx`
* `.xml`

---

### 🔧 参数说明（部分）

`UnstructuredFileLoader` 构造函数支持如下参数：

```python
UnstructuredFileLoader(
    file_path,
    mode="single",  # 或 "elements"
    strategy=None,
    ...
)
```

* `mode="single"`：将整个文件作为一个 document 返回
* `mode="elements"`：会将文件按段落等粒度拆分为多个 document
* `strategy`：控制内容解析策略（比如 pdf 是 auto/pdfplumber/pdfminer）

---

### 🧠 Tips

如果你需要对加载后的文本进行向量化，可以配合：

```python
from langchain.text_splitter import CharacterTextSplitter

text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
split_docs = text_splitter.split_documents(documents)
```

---

需要我帮你加载具体某个文件并进行预处理或者向量化的话可以发文件给我，我来帮你写。
