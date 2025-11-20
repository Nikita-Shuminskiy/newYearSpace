import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const RouterErrorBoundary: React.FC = () => {
    const navigate = useNavigate();
    const error = useRouteError() as Error;

    const handleRefresh = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">

                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                    Что-то пошло не так
                </h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Произошла непредвиденная ошибка. Попробуйте обновить страницу или свяжитесь с поддержкой, если проблема повторяется.
                </p>

                {process.env.NODE_ENV === 'development' && error?.message && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                        <p className="text-sm font-semibold text-red-800 mb-2">Детали ошибки:</p>
                        <p className="text-sm text-red-700 font-mono break-words">{error.message}</p>
                    </div>
                )}

                <button
                    onClick={handleRefresh}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                >
                    Обновить страницу
                </button>


            </div>
        </div>
    );
};

export default RouterErrorBoundary;
