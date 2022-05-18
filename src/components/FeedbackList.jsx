import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		return <div>No feedback yet!</div>;
	}

	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				// <li key={item.id}>{item.text}</li>
				<FeedbackItem
					key={item.id}
					item={item}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
}

export default FeedbackList;
