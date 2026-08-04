export default {
  slug: 'day4-pandas',
  title: 'Pandas cơ bản',
  subtitle: 'Series, DataFrame, read_csv, head, tail, shape, info, describe, loc, iloc',
  module: 'Module B · Lập trình & Dữ liệu',
  time: '16 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Pandas được ưu tiên cao. Tập trung đọc code: df.head() hiển thị gì, df.shape trả về gì, loc và iloc khác nhau thế nào.',
  quizId: 'day4-pandas',
  objectives: [
    'Hiểu Series và DataFrame',
    'Đọc các phương thức phổ biến của Pandas: head, tail, shape, info, describe',
    'Dùng loc và iloc để chọn dữ liệu',
  ],
  whatIsIt: [
    'Pandas là thư viện Python dùng để làm việc với bảng dữ liệu.',
    'Series giống như một cột dữ liệu.',
    'DataFrame giống như một bảng có hàng và cột.',
    'Kỳ đánh giá kiểm tra đọc code Pandas và dự đoán kết quả.',
  ],
  whyImportant: [
    'Pandas được ưu tiên cao — nhiều thí sinh xác nhận.',
    'Câu hỏi xử lý dữ liệu (Module B) dùng Pandas nhiều.',
    'Đọc code Pandas là kỹ năng cốt lõi cho kỳ đánh giá.',
  ],
  keyConcepts: [
    'Series: một cột dữ liệu',
    'DataFrame: một bảng (hàng và cột)',
    'read_csv: tải dữ liệu từ file CSV',
    'head() / tail(): các hàng đầu / cuối',
    'shape: (hàng, cột)',
    'info(): tóm tắt các cột và kiểu dữ liệu',
    'describe(): thống kê các cột số',
    'loc: chọn theo nhãn',
    'iloc: chọn theo vị trí (số thứ tự)',
  ],
  examples: [
    {
      code: `import pandas as pd
s = pd.Series([10, 20, 30])
print(s)
# 0    10
# 1    20
# 2    30`,
      note: 'Series là một cột. Nó có chỉ số (0, 1, 2).',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({
    "name": ["Minh", "Lan", "Huy"],
    "age": [25, 30, 22]
})
print(df.shape)  # (3, 2)`,
      note: 'DataFrame là một bảng. shape = (hàng, cột) = (3, 2).',
    },
    {
      code: `import pandas as pd
df = pd.read_csv("data.csv")
print(df.head())   # 5 hàng đầu
print(df.tail(2))  # 2 hàng cuối`,
      note: 'read_csv tải file CSV. head() hiển thị các hàng đầu, tail(n) hiển thị n hàng cuối.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"age": [25, 30, 22, 40]})
print(df.describe())
#       age
# count  4.0
# mean  29.25
# std    7.8
# min   22.0
# max   40.0`,
      note: 'describe() cho số liệu thống kê: count, mean, std, min, max.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df.loc[1])   # hàng có nhãn 1
print(df.iloc[1])  # hàng ở vị trí 1`,
      note: 'loc dùng nhãn; iloc dùng vị trí. Với chỉ số mặc định thì chúng giống nhau.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df["age"].mean())  # 25.67
print(df["age"].sum())   # 77`,
      note: 'Chọn cột bằng df["age"], rồi áp dụng mean() hoặc sum().',
    },
  ],
  assessmentQs: [
    'df.head() trả về gì?',
    'df.shape trả về gì?',
    'Điểm khác biệt giữa loc và iloc là gì?',
    'df.describe() hiển thị gì?',
    'Làm thế nào chọn một cột?',
  ],
  mistakes: [
    'Nhầm loc (nhãn) với iloc (vị trí).',
    'Nghĩ head() hiển thị mọi hàng — mặc định nó hiển thị 5 hàng đầu.',
    'Quên shape là (hàng, cột), không phải (cột, hàng).',
    'Nhầm Series (một cột) với DataFrame (bảng).',
    'Quên describe() chỉ tóm tắt các cột số.',
  ],
  summary: [
    'Series = một cột; DataFrame = bảng.',
    'head()/tail() hiển thị hàng đầu/cuối.',
    'shape = (hàng, cột).',
    'loc chọn theo nhãn; iloc chọn theo vị trí.',
    'describe() cho thống kê các cột số.',
  ],
  cheatSheet: [
    { term: 'pd.Series([...])', def: 'một cột dữ liệu' },
    { term: 'pd.DataFrame({...})', def: 'một bảng' },
    { term: 'pd.read_csv("f.csv")', def: 'tải file CSV' },
    { term: 'df.head()', def: '5 hàng đầu' },
    { term: 'df.tail(n)', def: 'n hàng cuối' },
    { term: 'df.shape', def: '(hàng, cột)' },
    { term: 'df.info()', def: 'kiểu cột và số giá trị không null' },
    { term: 'df.describe()', def: 'thống kê các cột số' },
    { term: 'df.loc[label]', def: 'chọn theo nhãn' },
    { term: 'df.iloc[pos]', def: 'chọn theo vị trí' },
    { term: 'df["col"]', def: 'chọn một cột' },
  ],
}
