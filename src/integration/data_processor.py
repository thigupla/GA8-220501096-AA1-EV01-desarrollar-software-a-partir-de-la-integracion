"""
Data Processor module for processing integrated data.
"""

from typing import List, Dict, Any


class DataProcessor:
    """
    Processor for handling and transforming integrated data.
    Demonstrates data integration and processing patterns.
    """
    
    @staticmethod
    def filter_data(data: List[Dict[str, Any]], key: str, value: Any) -> List[Dict[str, Any]]:
        """
        Filter a list of dictionaries by a key-value pair.
        
        Args:
            data: List of dictionaries to filter
            key: The key to filter by
            value: The value to match
            
        Returns:
            Filtered list of dictionaries
        """
        return [item for item in data if item.get(key) == value]
    
    @staticmethod
    def transform_data(data: List[Dict[str, Any]], mapping: Dict[str, str]) -> List[Dict[str, Any]]:
        """
        Transform data by renaming keys according to a mapping.
        
        Args:
            data: List of dictionaries to transform
            mapping: Dictionary mapping old keys to new keys
            
        Returns:
            Transformed list of dictionaries
        """
        transformed = []
        for item in data:
            new_item = {}
            for old_key, new_key in mapping.items():
                if old_key in item:
                    new_item[new_key] = item[old_key]
            transformed.append(new_item)
        return transformed
    
    @staticmethod
    def aggregate_data(data: List[Dict[str, Any]], group_key: str, sum_key: str) -> Dict[str, float]:
        """
        Aggregate numeric data by grouping and summing.
        
        Args:
            data: List of dictionaries to aggregate
            group_key: The key to group by
            sum_key: The numeric key to sum
            
        Returns:
            Dictionary with grouped sums
        """
        result = {}
        for item in data:
            group_value = item.get(group_key)
            sum_value = item.get(sum_key, 0)
            
            if group_value is not None:
                if group_value not in result:
                    result[group_value] = 0
                result[group_value] += sum_value
        
        return result
