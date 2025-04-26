import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class JobRecommender:
    def __init__(self, dataset_path):
        self.dataset_path = dataset_path
        self.df = pd.read_csv(self.dataset_path)
        self.vectorizer = TfidfVectorizer()  # Initialize the TF-IDF vectorizer
        self._prepare()

    def _prepare(self):
        # Debug: Print dataset columns
        print("Dataset Columns:", self.df.columns)

        # Handle missing columns
        if 'Domain' not in self.df.columns:
            self.df['Domain'] = ""  # Add an empty 'Domain' column
        if 'Type' not in self.df.columns:
            self.df['Type'] = ""  # Add an empty 'Type' column

        # Combine features for recommendation
        self.df['combined_features'] = self.df['Job Title'] + " " + self.df['Domain'] + " " + self.df['Job Type']

        # Fit the TF-IDF vectorizer on the combined features
        self.tfidf_matrix = self.vectorizer.fit_transform(self.df['combined_features'])
        print("TF-IDF vectorizer fitted successfully.")  # Debug log

    def recommend(self, user_input, top_n=5):
        # Transform the user input using the fitted TF-IDF vectorizer
        user_input_vector = self.vectorizer.transform([user_input])

        # Compute cosine similarity between user input and job postings
        similarity_scores = cosine_similarity(user_input_vector, self.tfidf_matrix)

        # Get the top N recommendations
        top_indices = similarity_scores[0].argsort()[-top_n:][::-1]
        recommendations = self.df.iloc[top_indices].to_dict(orient='records')

        return recommendations
