import './App.css'

function giveNumberOfDates(month: number, year: number): number {
	if (month == 2) {
		return year % 4 == 0 ? 29 : 28;
	} else if (month <= 7) {
		return month % 2 != 0 ? 31 : 30;
	} else if (month > 7 && month % 2 == 0) {
		return 31;
	}
	return 30;
}

const DateBoxBlank = () => {
	return <div className='dateBoxBlank'></div>
}

const DateBox = (prop: any) => {
	return <div className='dateBox'>
		<div className="top">
			<h2>{prop.date}</h2>
			<button className='colorPicker'></button>
		</div>
		<div className='noteView'>
			<ul>
				<li>
					Bajaj Finanserv
				</li>
				<li>
					Phonepe
				</li>
				<li>
					BNY Mellon
				</li>
			</ul>
		</div>
	</div>
}

const MonthBox = (prop: any) => {
	const dates = new Array(prop.startFrom).fill(0);
	for (let i = 1; i <= giveNumberOfDates(prop.month); i++) {
		dates[i + prop.startFrom - 1] = i;
	}

	const weeks = []
	for (let i = 0; i < dates.length; i += 7) {
		weeks.push(dates.slice(i, i + 7));
	}
	console.log(dates)

	return <div className='monthBox'>
		{
			weeks.map(week => {
				return <div className='weekBox'>
					{
						week.map((d: number, i: number) => {
							return <>
								{d ? <DateBox date={d} /> : <DateBoxBlank date={0} />}
								{(i != 0 && (i + 1) % (7) == 0) ? <br /> : ""}
							</>
						})
					}
				</div>
			})
		}
	</div>
}

export default function App() {
	return <>
		<MonthBox startFrom={3 - 1} month={3} />
	</>
}
