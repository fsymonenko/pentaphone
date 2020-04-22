import buyout from 'src/assets/svg/thy_buyout.svg'

export default {
	sell: {
		h1: 'Ваше объявление опубликовано!',
		description: 'Мы уже ищем покупателей для вашего устройства. Чтобы разместить больше объявлений, кликните',
		linkInText: {
			text: 'здесь',
			to: '/'
		},
		ps: 'Попробуйте продажу на аукционе ',
		advert: 'Продавайте быстрее и зарабатывайте больше, используя аукцион ReSell. Безопасная продажа, все размещение займет меньше минуты. ',
		link: {
			text: 'Мои объявления',
			to: '/my-advertisments'
		}
	},
	checkNoBargain: {
		h1: 'Вы заказали продажу с проверкой!',
		description: 'Чтобы наши специалисты смогли продиагностировать устройство, отправьте его в выбранный сервис-центр. После проверки мы начнем поиск покупателя ',
		linkInText: false,
		ps: 'Попробуйте продажу на аукционе ',
		advert: 'Продавайте быстрее и зарабатывайте больше, используя аукцион ReSell. Безопасная продажа, все размещение займет меньше минуты. ',
		link: {
			text: 'Мои объявления',
			to: '/my-advertisments'
		}
	},
	noCheckToModer: {
		h1: 'Ваше объявление отправлено на модерацию! \n',
		description: 'Наши специалисты уже проверяют его. Это займет не больше часа. После публикации мы начнем поиск покупателей для вашего устройства.',
		linkInText: false,
		link: {
			text: 'Мои объявления',
			to: '/my-advertisments'
		}
	},
	successPay: {
		h1: 'Оплата прошла успешно!',
		description: 'Мы перечислим деньги продавцу только после того, как вы получите и проверите устройство. В случае, если устройство вам не подойдет или продавец не отправит его вовремя, мы вернем деньги на ваш счет.',
		linkInText: false,
		ps: false,
		advert: false,
		link: false
	},
	toBargain: {
		h1: 'Ваше устройство выставлено на аукцион!',
		description: 'Чтобы разместить больше объявлений, кликните',
		linkInText: {
			text: 'здесь',
			to: '/'
		},
		ps: false,
		advert: 'После того, как будет определен победитель аукциона, вам нужно в течение 3 дней отправить ему товар.  Как только товар будет получен и проверен, мы перечислим деньги на ваш счет.',
		link: false,
		important: 'Важно! '
	},
	resetPassword: {
		h1: false,
		description: '',
		advert: 'Пожалуйста, проверьте свою электронную почту. Чтобы создать новый пароль, перейдите по ссылке в письме.',
		ps: false,
		linkInText: false,
		link: false
	},
	emailVerify: {
		h1: 'Вы успешно подтвердили электронную почту.',
		description: '',
		linkInText: false,
		ps: 'Попробуйте продажу на аукционе Продавайте быстрее и зарабатывайте больше, используя аукцион ReSell. ',
		advert: false,
		link: false,
		important: false
	},
	order600: {
		h1: 'Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш специалист.',
		description: '',
		linkInText: false,
		ps: false,
		advert: false,
		link: {
			text: 'На главную',
			to: '/'
		}
	},
	orderChecked: {
		h1: 'Заказ подтвержден. В ближайшее время вы получите сообщение с номером ТТН для отправки. Отправьте товар покупателю и ожидайте поступления денег.',
		description: '',
		linkInText: false,
		ps: false,
		advert: false,
		link: {
			text: 'На главную',
			to: '/'
		}
	},
	buyout: {
		h1: 'В ближайшее время с вами свяжется наш специалист.',
		img: buyout,
		description: '',
		linkInText: false,
		ps: false,
		advert: false,
		link: {
			text: 'На главную',
			to: '/'
		}
	}
}