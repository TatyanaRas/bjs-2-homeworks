class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	//добавляет новый звонок в коллекцию существующих
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error(`Отсутствуют обязательные аргументы`);
		} else if (this.alarmCollection.find(setup => setup.time === time)) {
			console.warn(`Уже присутствует звонок на это же время`)
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	//удаляет звонки по определённому времени
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(setup => setup.time !== time)
	}

	//возвращает текущее время в строковом формате HH:MM       
	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);  // 11:02  
	}

	//запускает будильник
	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {

			this.alarmCollection.forEach(setup => {
				if (setup.time === this.getCurrentFormattedTime() && setup.canCall) {
					setup.canCall = false;
					setup.callback();
				}
			})
		}, 1000);

	}

	//останавливает выполнение интервала будильника
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	//сбрасывает возможность запуска всех звонков   
	resetAllCalls() {
		this.alarmCollection.forEach(setup => setup.canCall = true);
	}

	//удаляет все звонки
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}