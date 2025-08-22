'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import LoadingSpinner from '../../../../components/LoadingSpinner';

export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetchProduct();
    }
  }, [params.id, fetchProduct]);

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${params.id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error || 'The product you are looking for does not exist.'}
          </p>
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400">
                Products
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 dark:text-white font-medium">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative h-96 w-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                product.inStock 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Category
                  </dt>
                  <dd className="text-sm text-gray-900 dark:text-white capitalize">
                    {product.category}
                  </dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Added
                  </dt>
                  <dd className="text-sm text-gray-900 dark:text-white">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="pt-6">
              <button
                disabled={!product.inStock}
                className={`w-full py-3 px-6 rounded-lg font-medium text-lg transition-colors duration-200 ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Product Details
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
