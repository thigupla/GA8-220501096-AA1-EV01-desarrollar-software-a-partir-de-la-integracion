"""
Mock data provider for demonstration purposes.
"""

from typing import List, Dict, Any


class MockDataProvider:
    """
    Provides mock data for testing and demonstration when external APIs are unavailable.
    """
    
    @staticmethod
    def get_sample_posts() -> List[Dict[str, Any]]:
        """
        Get sample posts data.
        
        Returns:
            List of sample post dictionaries
        """
        return [
            {
                "userId": 1,
                "id": 1,
                "title": "Introduction to Software Integration",
                "body": "Software integration is a fundamental aspect of modern development."
            },
            {
                "userId": 1,
                "id": 2,
                "title": "API Design Best Practices",
                "body": "Good API design ensures seamless integration between systems."
            },
            {
                "userId": 2,
                "id": 3,
                "title": "Data Processing Patterns",
                "body": "Efficient data processing is crucial for integration success."
            },
            {
                "userId": 2,
                "id": 4,
                "title": "Microservices Architecture",
                "body": "Microservices enable scalable and maintainable integrations."
            },
            {
                "userId": 3,
                "id": 5,
                "title": "Testing Integration Points",
                "body": "Proper testing ensures reliable system integrations."
            }
        ]
    
    @staticmethod
    def get_sample_users() -> List[Dict[str, Any]]:
        """
        Get sample users data.
        
        Returns:
            List of sample user dictionaries
        """
        return [
            {
                "id": 1,
                "name": "Alice Johnson",
                "email": "alice@example.com",
                "role": "Developer"
            },
            {
                "id": 2,
                "name": "Bob Smith",
                "email": "bob@example.com",
                "role": "Architect"
            },
            {
                "id": 3,
                "name": "Charlie Brown",
                "email": "charlie@example.com",
                "role": "Tester"
            }
        ]
