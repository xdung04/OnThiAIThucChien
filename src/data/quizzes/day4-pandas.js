export default {
  id: 'day4-pandas',
  title: 'Quiz Pandas cơ bản',
  questions: [
    {
      id: 'pd1',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
s = pd.Series([10, 20, 30])
print(s[1])`,
      options: ['10', '20', '30', 'Error'],
      answerIndex: 1,
      explanation: 'Series được đánh chỉ số như list, bắt đầu từ 0. s[1] = 20.',
    },
    {
      id: 'pd2',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df["age"].mean())`,
      options: ['25', '25.67', '30', '77'],
      answerIndex: 1,
      explanation: 'mean = (25+30+22)/3 = 77/3 ≈ 25.67.',
    },
    {
      id: 'pd3',
      type: 'multiple-choice',
      topic: 'Pandas',
      question: 'df.info() hiển thị gì?',
      options: ['Chỉ 5 hàng đầu', 'Kiểu cột và số giá trị không null', 'Chỉ shape', 'Trung bình mỗi cột'],
      answerIndex: 1,
      explanation: 'info() hiển thị tên cột, kiểu dữ liệu và số giá trị không null mỗi cột.',
    },
    {
      id: 'pd4',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df.iloc[2]["name"])`,
      options: ['Minh', 'Lan', 'Huy', 'Error'],
      answerIndex: 2,
      explanation: 'iloc[2] là hàng ở vị trí 2, là Huy.',
    },
    {
      id: 'pd5',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"age": [25, 30, 22, 40]})
print(df.describe().loc["mean", "age"])`,
      options: ['25', '29.25', '30', '40'],
      answerIndex: 1,
      explanation: 'describe() mean của age = (25+30+22+40)/4 = 117/4 = 29.25.',
    },
    {
      id: 'pd6',
      type: 'multiple-choice',
      topic: 'Pandas',
      question: 'DataFrame là gì?',
      options: ['Một cột dữ liệu', 'Một bảng có hàng và cột', 'Một list Python', 'Một file CSV'],
      answerIndex: 1,
      explanation: 'DataFrame là bảng 2 chiều có hàng và cột.',
    },
  ],
}
