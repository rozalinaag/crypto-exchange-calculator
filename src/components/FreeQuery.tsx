'use client';
import React, { useEffect, useState } from 'react';
import { FeeResponse } from '../types';

type FeeQueryProps = {
  symbol: string;
};

const FeeQuery = ({ symbol }: FeeQueryProps) => {
  const [feeData, setFeeData] = useState<FeeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFeeData = async () => {
      try {
        const response = await fetch(`/api/fee?symbol=${symbol}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: FeeResponse = await response.json();
        setFeeData(data);
      } catch {
        setError('Error fetching fee data');
      } finally {
        setLoading(false);
      }
    };

    fetchFeeData();
  }, [symbol]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!feeData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h3>Fee Information for {feeData.symbol}</h3>
      <p>Fee: {feeData.fee}%</p>
      <p>Min Amount: {feeData.min_amount}</p>
      <p>Max Amount: {feeData.max_amount}</p>
      <p>Last Updated: {new Date(feeData.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
};

export default FeeQuery;
