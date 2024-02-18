import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Select,
	SelectItem,
} from '@nextui-org/react';
import LoadingSpinner from '@components/loading';
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
				<>
					<h2>Select Mode Quizz</h2>
					<Card
						// isBlurred
						className='border-none bg-red-300  w-[810px]'
						shadow='sm'
					>
						<CardHeader className='flex-col items-start px-4 pt-2 pb-0'>
							<h4 className='font-bold text-large'>Frontend Radio</h4>
						</CardHeader>
						<CardBody className='py-2 overflow-visible'>
							<form
								onSubmit={handleSubmit((data) => loadQuestions(data))}
								className='flex flex-col w-full p-4 my-6 mb-3 text-lg border-b-2 rounded border-primary bg-content'
							>
								<div className='flex flex-col gap-2'>
									<h3 className='text-default-500 text-small'>
										Number of Questions
									</h3>
									<Select
										label='Select number of questions'
										className='max-w-xs'
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
									<h3 className='text-default-500 text-small'>Difficulty</h3>
									<Select
										label='Select Difficulty'
										className='max-w-xs'
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
									<h3 className='text-default-500 text-small'>Category</h3>
									<Select
										label='Select Cateogry'
										className='max-w-xs'
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
									<h3 className='text-default-500 text-small'>Type</h3>
									<Select
										label='Select type of questions'
										className='max-w-xs'
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
									<Button type='submit' className=''>
										Start Quizz
									</Button>
								</div>
							</form>
						</CardBody>
					</Card>
				</>
			)}
		</>
	);
};

export default InitialView;
