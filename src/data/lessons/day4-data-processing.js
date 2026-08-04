export default {
  slug: 'day4-data-processing',
  title: 'Xử lý dữ liệu',
  subtitle: 'CSV, giá trị thiếu, trùng lặp, lọc, sắp xếp, groupby, value_counts',
  module: 'Module B · Lập trình & Dữ liệu',
  time: '14 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Tập trung đọc code Pandas: lọc theo điều kiện, groupby, sort_values và value_counts. Dự đoán bảng kết quả trông như thế nào.',
  quizId: 'day4-data-processing',
  objectives: [
    'Hiểu CSV và các vấn đề phổ biến của dữ liệu',
    'Đọc code lọc và sắp xếp',
    'Hiểu groupby, value_counts và các hàm tổng hợp',
  ],
  whatIsIt: [
    'Xử lý dữ liệu nghĩa là làm sạch và tổ chức dữ liệu.',
    'Việc phổ biến: xử lý giá trị thiếu, bỏ trùng lặp, lọc, sắp xếp, gộp nhóm.',
    'Kỳ đánh giá kiểm tra đọc code Pandas thực hiện các việc này.',
  ],
  whyImportant: [
    'Xử lý dữ liệu là chủ đề được xác nhận.',
    'Module B (35%) gồm các câu hỏi xử lý dữ liệu.',
    'Đọc code Pandas là kỹ năng then chốt.',
  ],
  keyConcepts: [
    'CSV: file văn bản đơn giản có hàng và cột',
    'Giá trị thiếu: NaN (không phải số)',
    'dropna(): xóa hàng có giá trị thiếu',
    'drop_duplicates(): xóa hàng trùng lặp',
    'Lọc: df[df["col"] > value]',
    'sort_values(): sắp xếp theo một cột',
    'groupby(): gộp dữ liệu theo một cột',
    'value_counts(): đếm các giá trị duy nhất',
  ],
  examples: [
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, None, 22]})
print(df.isna())
#    name    age
# 0 False  False
# 1 False   True
# 2 False  False`,
      note: 'isna() cho biết đâu là giá trị thiếu (NaN).',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, None, 22]})
print(df.dropna())
#    name  age
# 0  Minh  25.0
# 2  Huy   22.0`,
      note: 'dropna() xóa các hàng có bất kỳ giá trị thiếu nào.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Minh", "Lan"], "age": [25, 25, 30]})
print(df.drop_duplicates())
#    name  age
# 0  Minh   25
# 2  Lan    30`,
      note: 'drop_duplicates() xóa các hàng trùng lặp.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df[df["age"] > 24])
#    name  age
# 0  Minh   25
# 1  Lan    30`,
      note: 'Lọc: giữ lại các hàng có age > 24.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df.sort_values("age"))
#    name  age
# 2  Huy   22
# 0  Minh  25
# 1  Lan   30`,
      note: 'sort_values("age") sắp xếp theo tuổi tăng dần theo mặc định.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "HN", "DN"], "sales": [10, 20, 30, 40]})
print(df.groupby("city")["sales"].sum())
# city
# DN     40
# HCM    20
# HN     40`,
      note: 'groupby("city") gộp các hàng theo thành phố, rồi sum() cộng doanh số mỗi thành phố.',
    },
    {
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "HN", "DN"]})
print(df["city"].value_counts())
# HN     2
# HCM    1
# DN     1`,
      note: 'value_counts() đếm mỗi giá trị xuất hiện bao nhiêu lần.',
    },
  ],
  assessmentQs: [
    'dropna() làm gì?',
    'drop_duplicates() làm gì?',
    'Làm thế nào lọc các hàng có cột lớn hơn một giá trị?',
    'sort_values() mặc định sắp xếp thế nào?',
    'groupby("col")["other"].sum() trả về gì?',
    'value_counts() trả về gì?',
  ],
  mistakes: [
    'Quên rằng dropna() xóa cả hàng.',
    'Nhầm dropna() (giá trị thiếu) với drop_duplicates() (trùng lặp).',
    'Nghĩ sort_values() mặc định sắp giảm dần — thực ra tăng dần.',
    'Quên groupby cần một hàm tổng hợp như sum() hoặc mean().',
    'Nhầm value_counts() (đếm) với unique() (giá trị duy nhất).',
  ],
  summary: [
    'dropna() xóa giá trị thiếu; drop_duplicates() xóa trùng lặp.',
    'Lọc bằng df[df["col"] > value].',
    'sort_values() mặc định sắp tăng dần.',
    'groupby() + hàm tổng hợp (sum/mean) tóm tắt các nhóm.',
    'value_counts() đếm các giá trị duy nhất.',
  ],
  cheatSheet: [
    { term: 'df.isna()', def: 'cho biết giá trị thiếu' },
    { term: 'df.dropna()', def: 'xóa hàng có giá trị thiếu' },
    { term: 'df.drop_duplicates()', def: 'xóa hàng trùng lặp' },
    { term: 'df[df["col"] > v]', def: 'lọc hàng' },
    { term: 'df.sort_values("col")', def: 'sắp xếp tăng dần' },
    { term: 'df.groupby("col")["x"].sum()', def: 'tổng theo nhóm' },
    { term: 'df["col"].value_counts()', def: 'đếm giá trị duy nhất' },
    { term: 'NaN', def: 'giá trị thiếu' },
  ],
}
