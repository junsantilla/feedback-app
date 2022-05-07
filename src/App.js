import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteitem = (id) => {
		// console.log(id);
		setFeedback(feedback.filter((item) => item.id !== id));
	};

	return (
		<div>
			<Header text="Feedback App" />
			<div className="container">
				<FeedbackList feedback={feedback} handledelete={deleteitem} />
			</div>
		</div>
	);
}

export default App;
