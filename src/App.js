import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteitem = (id) => {
		// console.log(id);
		setFeedback(feedback.filter((item) => item.id !== id));
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		console.log(newFeedback);
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<div>
			<Header text="Feedback App" />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteitem} />
			</div>
		</div>
	);
}

export default App;
