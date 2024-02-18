import { Select, SelectItem } from '@nextui-org/react';
import LoadingSpinner from '@components/Loading';
import {
	questionDiffSetting,
	questionNumberSetting,
	questionTypeSetting,
} from '@constants/settings';

import type {
	QuestionDifficultyOptions,
	QuestionNumberOptions,
	QuestionTypeOptions,
} from '@models/game';

import { getQuestions } from '@store/features/game';
import { useAppDispatch, useAppSelector } from '@store/index';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormModel {
	questionNumber: QuestionNumberOptions;
	questionCategory: string;
	questionType: QuestionTypeOptions;
	questionDifficulty: QuestionDifficultyOptions;
}

const InitialView: React.FC = () => {
	const questionNumber = useAppSelector((state) => state.game.questionNumber);
	const questionType = useAppSelector((state) => state.game.questionType);
	const questionCategory = useAppSelector(
		(state) => state.game.questionCategory
	);
	const questionDifficulty = useAppSelector((state) => state.game.difficulty);
	const categories = useAppSelector((state) => state.game.categories);
	const loading = useAppSelector((state) => state.game.loading);
	const dispatch = useAppDispatch();

	const { handleSubmit, register } = useForm<FormModel>({
		defaultValues: {
			questionNumber,
			questionType,
			questionCategory,
			questionDifficulty,
		},
	});

	const loadQuestions = React.useCallback(
		async ({
			questionNumber,
			questionCategory,
			questionDifficulty,
			questionType,
		}: FormModel) => {
			await dispatch(
				getQuestions({
					number: questionNumber,
					category: questionCategory,
					type: questionType,
					difficulty: questionDifficulty,
				})
			)
				.unwrap()
				.catch((error) => {
					toast.error(error, { toastId: 'question-error' });
				});
		},
		[dispatch]
	);

	return (
		<>
			{loading && <LoadingSpinner />}

			{!loading && (
				<div className='w-full mt-6'>
					<div className='flex flex-col items-center w-full '>
						<h1 className='text-5xl '>Select Mode Quizz</h1>
					</div>
					<div className=''>
						<form
							onSubmit={handleSubmit((data) => loadQuestions(data))}
							className='flex flex-col w-full my-6 gap-7'
						>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg '>Number of questions</h1>
								<Select
									color='warning'
									label='Select number of questions'
									className='w-full shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-md'
									{...register('questionNumber')}
								>
									{questionNumberSetting.map((option) => (
										<SelectItem key={option.code} value={option.code}>
											{option.label}
										</SelectItem>
									))}
								</Select>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg '>Difficulty</h1>
								<Select
									label='Select Difficulty'
									color='warning'
									className='w-full shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-md'
									{...register('questionDifficulty')}
								>
									{questionDiffSetting.map((option) => (
										<SelectItem key={option.code} value={option.code}>
											{option.label}
										</SelectItem>
									))}
								</Select>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg '>Category</h1>
								<Select
									label='Select Cateogry'
									className='w-full shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-md'
									color='warning'
									{...register('questionCategory')}
								>
									{categories.map((option) => (
										<SelectItem key={option.code} value={option.code}>
											{option.label}
										</SelectItem>
									))}
								</Select>
							</div>
							<div className='flex flex-col gap-2'>
								<h1 className='text-lg '>Type</h1>
								<Select
									label='Select type of questions'
									className='w-full shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-md'
									color='warning'
									{...register('questionType')}
								>
									{questionTypeSetting.map((option) => (
										<SelectItem key={option.code} value={option.code}>
											{option.label}
										</SelectItem>
									))}
								</Select>
							</div>

							<div className='form__actions'>
								<button
									type='submit'
									className='bg-blue-custom  shadow-[6px_6px_0px_0px_rgba(22,57,89)] p-4 rounded-md text-black font-bold'
								>
									Start Quizz
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default InitialView;
