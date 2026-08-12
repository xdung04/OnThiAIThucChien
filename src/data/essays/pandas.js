// Ôn tập tự luận — Pandas (20 câu) · tính tay, không máy tính.
// Mức độ: trên cơ bản — đọc code, phối hợp loc/iloc, groupby, merge.
export default {
  id: 'pandas',
  label: 'Pandas',
  order: 2,
  desc: '20 câu · đọc code & tính tay',
  questions: [
    {
      id: 'pd-e01',
      section: 'pandas',
      topic: 'Series: label vs vị trí',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import pandas as pd
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s['b'], s.iloc[1])`,
      answerText: '20 20',
      steps: [
        's["b"] là truy cập theo NHÃN (label) → phần tử ở index b = 20.',
        's.iloc[1] là truy cập theo VỊ TRÍ số nguyên → phần tử thứ 2 = 20.',
        'Ở đây nhãn và vị trí trùng nhau nên cùng ra 20.',
      ],
      tip: 'Đảo ngược thử: nếu index là [10, 20, 30] thì s[20] (label) và s.iloc[1] (vị trí) sẽ khác nhau.',
    },
    {
      id: 'pd-e02',
      section: 'pandas',
      topic: 'loc slicing bao phải',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
s = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(s.loc['b':'c'].sum())`,
      answerText: '50',
      steps: [
        'loc theo nhãn KHÁC slicing thường: vế phải được BAO GỒM.',
        's.loc["b":"c"] = 2 phần tử: 20 và 30.',
        'Tổng = 20 + 30 = 50.',
      ],
      tip: 'Nhớ nhanh: loc = cận phải lấy kín (inclusive); iloc = kiểu Python thường (exclusive).',
    },
    {
      id: 'pd-e03',
      section: 'pandas',
      topic: 'iloc khi index không phải số',
      difficulty: 'Khó',
      question:
        'Đoạn code sau in ra giá trị nào? Nếu viết s[2] thay vì s.iloc[2] thì kết quả khác không?',
      code: `import pandas as pd
s = pd.Series([5, 10, 15], index=[1, 2, 3])
print(s.iloc[2])`,
      answerText: '15. Có — s[2] trả 10 (theo nhãn 2), còn s.iloc[2] trả 15 (vị trí thứ 3).',
      steps: [
        's.iloc[2] luôn là phần tử ở vị trí index 2 của dãy (phần tử thứ 3) = 15.',
        's[2] ưu tiên truy cập theo nhãn khi index là số → nhãn 2 = 10.',
        'Đây là điểm dễ nhầm nhất giữa hai cách lấy phần tử.',
      ],
      tip: 'Khi index là số: s[2] (label) và s.iloc[2] (vị trí) cho kết quả KHÁC nhau — đọc kỹ đề.',
    },
    {
      id: 'pd-e04',
      section: 'pandas',
      topic: 'describe + loc',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'age': [20, 30, 40, 50]})
print(df.describe().loc['mean', 'age'])`,
      answerText: '35.0',
      steps: [
        'df.describe() tạo bảng thống kê: count, mean, std, min, 25%, 50%, 75%, max.',
        'loc["mean", "age"] lấy ô giao giữa hàng mean và cột age.',
        'mean = (20+30+40+50) / 4 = 35.0.',
      ],
      tip: 'describe() trả về một DataFrame nên loc 2 chiều [hàng, cột] hoạt động bình thường.',
    },
    {
      id: 'pd-e05',
      section: 'pandas',
      topic: 'Filter nhiều điều kiện',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'city': ['HN', 'HCM', 'DN', 'HN'], 'sales': [10, 20, 30, 40]})
print(df[(df.city == 'HN') & (df.sales > 15)]['sales'].sum())`,
      answerText: '40',
      steps: [
        'Điều kiện 1: city == "HN" → các hàng 0 và 3.',
        'Điều kiện 2: sales > 15 → trong 2 hàng HN chỉ hàng 3 (sales=40) thoả (hàng 0 sales=10).',
        'Lấy cột sales của hàng 3 rồi sum → 40.',
      ],
      tip: 'Nhớ dấu ngoặc quanh mỗi điều kiện khi dùng & — && không dùng được với boolean Series.',
    },
    {
      id: 'pd-e06',
      section: 'pandas',
      topic: 'Filter với isin',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'name': ['A', 'B', 'C', 'D'], 'score': [1, 2, 3, 4]})
print(df[df.name.isin(['A', 'C'])].score.mean())`,
      answerText: '2.0',
      steps: [
        'isin(["A","C"]) tạo boolean mask đúng ở các hàng name = A hoặc C (hàng 0 và 2).',
        'Bộ lọc giữ 2 hàng có score = 1 và 3.',
        'mean = (1 + 3) / 2 = 2.0.',
      ],
      tip: 'isin thay cho nhiều điều kiện == nối bằng dấu | — gọn và ít sai hơn.',
    },
    {
      id: 'pd-e07',
      section: 'pandas',
      topic: 'groupby + sum',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'grp': ['x', 'y', 'x', 'y'], 'val': [1, 2, 3, 4]})
print(df.groupby('grp').val.sum().loc['y'])`,
      answerText: '6',
      steps: [
        'Gom hàng theo grp: nhóm x = [1, 3], nhóm y = [2, 4].',
        'sum từng nhóm: x → 4, y → 6.',
        'Kết quả là Series index grp; loc["y"] lấy 6.',
      ],
      tip: 'groupby(...).col.method() trả về Series có index là giá trị cột nhóm.',
    },
    {
      id: 'pd-e08',
      section: 'pandas',
      topic: 'groupby + mean',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra kết quả nào?',
      code: `import pandas as pd
df = pd.DataFrame({'grp': ['x', 'x', 'y'], 'val': [10, 20, 30]})
print(df.groupby('grp').val.mean())`,
      answerText: 'Series: x → 15.0, y → 30.0',
      steps: [
        'Nhóm x có [10, 20] → mean = 15.0.',
        'Nhóm y có [30] → mean = 30.0.',
        'Index kết quả là grp; giá trị in dạng float.',
      ],
      tip: 'mean luôn trả float — dù số nguyên vẫn ra 15.0 chứ không phải 15.',
    },
    {
      id: 'pd-e09',
      section: 'pandas',
      topic: 'groupby + agg nhiều phép',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'grp': ['p', 'p', 'q'], 'v': [1, 2, 6]})
r = df.groupby('grp').agg({'v': ['sum', 'count']})
print(r.loc['p', ('v', 'sum')])`,
      answerText: '3',
      steps: [
        'agg({"v": ["sum", "count"]}) tạo cột đa chỉ số (v, sum) và (v, count).',
        'Nhóm p có 2 giá trị 1 và 2.',
        'r.loc["p", ("v", "sum")] = 1 + 2 = 3.',
      ],
      tip: 'Khi agg dùng list, cột kết quả trở thành MultiIndex (cột gốc, phép tính) — phải truyền theo tuple.',
    },
    {
      id: 'pd-e10',
      section: 'pandas',
      topic: 'apply hàm tự định nghĩa',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'x': [1, 2, 3]})
print(df.x.apply(lambda v: v * v + v).sum())`,
      answerText: '20',
      steps: [
        'apply áp dụng hàm cho từng phần tử: v*v + v.',
        '1 → 2; 2 → 6; 3 → 12.',
        'Tổng = 2 + 6 + 12 = 20.',
      ],
      tip: 'Viết vài số nhỏ ra nháp trước khi đoán — apply lambda chạy từng phần tử, dễ nhầm với phép vector.',
    },
    {
      id: 'pd-e11',
      section: 'pandas',
      topic: 'map + fillna',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'code': ['a', 'b', 'c']})
m = {'a': 1, 'b': 2}
print(df.code.map(m).fillna(0).sum())`,
      answerText: '3',
      steps: [
        'map(m) thay giá trị theo dict: a → 1, b → 2.',
        'c không có trong dict → trở thành NaN.',
        'fillna(0) đổi NaN thành 0 → tổng = 1 + 2 + 0 = 3.',
      ],
      tip: 'map(dict) với giá trị không nằm trong dict sẽ ra NaN — phải fillna trước khi tính.',
    },
    {
      id: 'pd-e12',
      section: 'pandas',
      topic: 'mean theo hàng',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'a': [2, 4], 'b': [6, 8]})
print(df.mean(axis=1).sum())`,
      answerText: '10.0',
      steps: [
        'axis=1 → trung bình theo HÀNG (mỗi hàng một giá trị).',
        'Hàng 0: (2+6)/2 = 4.0; Hàng 1: (4+8)/2 = 6.0.',
        'Tổng = 4 + 6 = 10.0.',
      ],
      tip: 'Quy tắc axis giống NumPy: axis=1 là ngang (mỗi hàng) → kết quả có chiều dài = số hàng.',
    },
    {
      id: 'pd-e13',
      section: 'pandas',
      topic: 'set_index + loc',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'id': [1, 2], 'v': [10, 20]})
print(df.set_index('id').loc[2, 'v'])`,
      answerText: '20',
      steps: [
        'set_index("id") biến cột id thành index của DataFrame.',
        'loc[2] truy cập theo NHÃN index id = 2.',
        'Lấy cột v → 20.',
      ],
      tip: 'Sau set_index, truy cập theo NHÃN của cột vừa đặt làm index chứ không phải vị trí.',
    },
    {
      id: 'pd-e14',
      section: 'pandas',
      topic: 'rename + iloc',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
df = df.rename(columns={'a': 'x'})
print(df['x'].iloc[1] + df['b'].iloc[0])`,
      answerText: '5',
      steps: [
        'rename(columns={"a": "x"}) đổi tên cột a thành x.',
        'df["x"] = [1, 2] → iloc[1] = 2.',
        'df["b"] = [3, 4] → iloc[0] = 3. Tổng = 5.',
      ],
      tip: 'rename chỉ đổi tên cột, dữ liệu và thứ tự giữ nguyên — vẫn dùng iloc theo vị trí.',
    },
    {
      id: 'pd-e15',
      section: 'pandas',
      topic: 'at vs iloc',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì?',
      code: `import pandas as pd
df = pd.DataFrame({'v': [7, 8, 9]}, index=[10, 20, 30])
print(df.at[20, 'v'], df.iloc[2]['v'])`,
      answerText: '8 9',
      steps: [
        'at[20, "v"] truy cập theo NHÃN hàng 20 và cột v → 8.',
        'iloc[2] truy cập theo VỊ TRÍ hàng thứ 3 (index 2) → 9.',
        'Kết quả 8 9.',
      ],
      tip: 'at dùng nhãn (label), iloc dùng vị trí — với index [10,20,30] hai cách này khác nhau rõ rệt.',
    },
    {
      id: 'pd-e16',
      section: 'pandas',
      topic: 'drop_duplicates',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra shape nào?',
      code: `import pandas as pd
df = pd.DataFrame({'k': ['a', 'b', 'a', 'c', 'b'], 'v': [1, 2, 3, 4, 5]})
print(df.drop_duplicates('k').shape)`,
      answerText: '(3, 2)',
      steps: [
        'drop_duplicates("k") bỏ các hàng trùng giá trị ở cột k, giữ lần xuất hiện đầu.',
        'Các giá trị k duy nhất: a, b, c → còn 3 hàng.',
        'Vẫn giữ 2 cột (k, v) → shape (3, 2).',
      ],
      tip: 'drop_duplicates mặc định keep="first" — chỉ bỏ hàng trùng ở cột chỉ định, không làm mất cột.',
    },
    {
      id: 'pd-e17',
      section: 'pandas',
      topic: 'fillna bằng mean',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra kết quả nào?',
      code: `import pandas as pd
import numpy as np
df = pd.DataFrame({'v': [1.0, np.nan, 3.0, np.nan]})
print(df.v.fillna(df.v.mean()).sum())`,
      answerText: '8.0',
      steps: [
        'mean của cột v BỎ QUA NaN: (1 + 3) / 2 = 2.0.',
        'fillna(2.0) thay 2 ô NaN bằng 2.0 → [1, 2, 3, 2].',
        'Tổng = 1 + 2 + 3 + 2 = 8.0.',
      ],
      tip: 'mean/median của pandas BỎ QUA NaN theo mặc định — đây là bẫy hay gặp khi tính tay.',
    },
    {
      id: 'pd-e18',
      section: 'pandas',
      topic: 'sort_values nhiều cột',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
df = pd.DataFrame({'team': ['a', 'b', 'a', 'b'], 'pts': [10, 5, 7, 9]})
df = df.sort_values(['team', 'pts'], ascending=[True, False])
print(df.iloc[1]['pts'])`,
      answerText: '7',
      steps: [
        'Sắp team tăng dần (a trước b), trong cùng team sắp pts giảm dần.',
        'Team a (pts 10, 7) đứng trước team b (pts 9, 5).',
        'Thứ tự sau sort: a/10, a/7, b/9, b/5 → iloc[1] = a/7 → pts = 7.',
      ],
      tip: 'ascending=[True, False] áp dụng theo đúng thứ tự cột trong list — đọc cẩn thận.',
    },
    {
      id: 'pd-e19',
      section: 'pandas',
      topic: 'concat',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
d1 = pd.DataFrame({'x': [1, 2]})
d2 = pd.DataFrame({'x': [3, 4]})
print(pd.concat([d1, d2]).x.sum())`,
      answerText: '10',
      steps: [
        'concat xếp chồng hai DataFrame theo hàng (mặc định axis=0).',
        'Kết quả cột x = [1, 2, 3, 4].',
        'Tổng = 10.',
      ],
      tip: 'concat dọc = thêm hàng (axis=0), concat ngang = thêm cột (axis=1).',
    },
    {
      id: 'pd-e20',
      section: 'pandas',
      topic: 'merge inner + value_counts',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import pandas as pd
a = pd.DataFrame({'id': [1, 2, 3], 'name': ['U1', 'U2', 'U3']})
b = pd.DataFrame({'id': [2, 3, 3], 'score': [90, 80, 70]})
m = pd.merge(a, b, on='id')
print(m.name.value_counts().loc['U3'])`,
      answerText: '2',
      steps: [
        'merge inner trên id: mỗi hàng của b nối với tên tương ứng trong a.',
        'id 2 → U2; id 3 → U3 (2 bản ghi vì b có 2 dòng id = 3).',
        'name.value_counts(): U3 xuất hiện 2 lần → 2.',
      ],
      tip: 'inner merge giữ id có ở CẢ HAI bảng; nếu bên phải trùng id thì hàng nhân đôi.',
    },
  ],
}