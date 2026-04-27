import { useState } from 'react';
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isTakingSurvey, setIsTakingSurvey] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: Date.now(), text: '', options: [''], required: true }
    ]);
  };

  // Update question text
  const updateQuestionText = (id, text) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, text } : q));
  };

  // Update option text
  const updateOption = (qid, idx, value) => {
    setQuestions(questions.map(q =>
      q.id === qid
        ? { ...q, options: q.options.map((opt, i) => i === idx ? value : opt) }
        : q
    ));
  };

  // Add option
  const addOption = (qid) => {
    setQuestions(questions.map(q =>
      q.id === qid ? { ...q, options: [...q.options, ''] } : q
    ));
  };

  // Delete question
  const deleteQuestion = (qid) => {
    setQuestions(questions.filter(q => q.id !== qid));
  };

  // Handle answer selection
  const handleAnswer = (qid, value) => {
    setAnswers({ ...answers, [qid]: value });
  };

  // Validate before submit
  const validate = () => {
    const missing = questions.filter(q => q.required && !answers[q.id]);
    return missing.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    } else {
      alert('Please answer all required questions.');
    }
  };

  const resetSurvey = () => {
    setAnswers({});
    setIsSubmitted(false);
    setIsTakingSurvey(false);
  };

  return (
    <div className="app-container">
      <h1>📝 Dynamic Survey Builder</h1>

      {!isTakingSurvey && !isSubmitted && (
        <div className="builder">
          <h2>Create Survey</h2>
          {questions.map((q, idx) => (
            <div key={q.id} className="question-block">
              <input
                type="text"
                placeholder={`Question ${idx + 1}`}
                value={q.text}
                onChange={(e) => updateQuestionText(q.id, e.target.value)}
              />
              {q.options.map((opt, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) => updateOption(q.id, i, e.target.value)}
                />
              ))}
              <button onClick={() => addOption(q.id)}>Add Option</button>
              <button onClick={() => deleteQuestion(q.id)}>Delete Question</button>
            </div>
          ))}
          <button onClick={addQuestion}>Add Question</button>
          {questions.length > 0 && (
            <button onClick={() => setIsTakingSurvey(true)}>Take Survey</button>
          )}
        </div>
      )}

      {isTakingSurvey && !isSubmitted && (
        <form onSubmit={handleSubmit} className="survey">
          <h2>Take Survey</h2>
          {questions.map(q => (
            <div key={q.id} className="survey-question">
              <p>{q.text} {q.required && '*'}</p>
              {q.options.map((opt, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}

      {isSubmitted && (
        <div className="results">
          <h2>📊 Survey Results</h2>
          {questions.map(q => (
            <p key={q.id}>
              <strong>{q.text}:</strong> {answers[q.id]}
            </p>
          ))}
          <button onClick={resetSurvey}>Retake / Build New</button>
        </div>
      )}
    </div>
  );
}

export default App;
