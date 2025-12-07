"""
Main application demonstrating software integration.
"""

from integration import APIClient, DataProcessor, MockDataProvider


def demonstrate_api_integration():
    """
    Demonstrate API integration using a public API.
    Falls back to mock data if API is unavailable.
    """
    print("=== API Integration Demo ===\n")
    
    # Try to use real API first
    try:
        # Using JSONPlaceholder - a free fake API for testing
        with APIClient("https://jsonplaceholder.typicode.com") as client:
            print("Fetching posts from API...")
            posts = client.get("posts", params={"_limit": 5})
            print(f"Retrieved {len(posts)} posts from API\n")
            
            for post in posts:
                print(f"Post ID: {post['id']}")
                print(f"Title: {post['title']}")
                print(f"User ID: {post['userId']}")
                print("-" * 50)
            
            return posts
    except Exception as e:
        print(f"API unavailable: {str(e)[:100]}...")
        print("Using mock data for demonstration\n")
        
        # Use mock data as fallback
        posts = MockDataProvider.get_sample_posts()
        print(f"Retrieved {len(posts)} posts from mock data\n")
        
        for post in posts:
            print(f"Post ID: {post['id']}")
            print(f"Title: {post['title']}")
            print(f"User ID: {post['userId']}")
            print("-" * 50)
        
        return posts


def demonstrate_data_processing(data):
    """
    Demonstrate data processing and transformation.
    """
    print("\n=== Data Processing Demo ===\n")
    
    if not data:
        print("No data to process")
        return
    
    # Filter data
    print("Filtering posts by user ID 1...")
    filtered = DataProcessor.filter_data(data, "userId", 1)
    print(f"Found {len(filtered)} posts by user 1\n")
    
    # Transform data
    print("Transforming data structure...")
    mapping = {
        "id": "post_id",
        "title": "post_title",
        "userId": "author_id"
    }
    transformed = DataProcessor.transform_data(data, mapping)
    
    if transformed:
        print("Sample transformed data:")
        print(transformed[0])
    
    # Aggregate data
    print("\nAggregating posts by user...")
    # Create synthetic data with counts for aggregation
    count_data = [{"userId": post["userId"], "count": 1} for post in data]
    aggregated = DataProcessor.aggregate_data(count_data, "userId", "count")
    
    print("Posts per user:")
    for user_id, count in aggregated.items():
        print(f"  User {user_id}: {count} posts")


def main():
    """
    Main function demonstrating the integration system.
    """
    print("Software Integration Project")
    print("GA8-220501096-AA1-EV01")
    print("=" * 50)
    print()
    
    # Demonstrate API integration
    posts = demonstrate_api_integration()
    
    # Demonstrate data processing
    demonstrate_data_processing(posts)
    
    print("\n" + "=" * 50)
    print("Integration demonstration completed!")


if __name__ == "__main__":
    main()
