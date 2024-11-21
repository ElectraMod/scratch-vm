alert('This extension is made by Legume, in the TurboBuilder Discord. Discord can be home to hackers, trying to steal or information, or infect your computer. By Clicking OK, you will add this extension in electramod.')
(function(Scratch) {
    'use strict';

    class TimeZoneExtension {
        getInfo() {
            return {
                id: 'timezoneExtension',
                name: 'Time Zone',
                blocks: [
                    {
                        opcode: 'getTime',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'time in [TIMEZONE] with offset [OFFSET] hours',
                        arguments: {
                            TIMEZONE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'timeZones',
                                defaultValue: 'GMT'
                            },
                            OFFSET: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                ],
                menus: {
                    timeZones: {
                        acceptReporters: false,
                        items: [
                            { text: 'GMT', value: 'GMT' },
                            { text: 'UTC', value: 'UTC' },
                            { text: 'EST', value: 'EST' },   // Eastern Standard Time
                            { text: 'PST', value: 'PST' },   // Pacific Standard Time
                            { text: 'CST', value: 'CST' },   // Central Standard Time
                            { text: 'MST', value: 'MST' },   // Mountain Standard Time
                            { text: 'IST', value: 'IST' },   // Indian Standard Time
                            { text: 'CET', value: 'CET' },   // Central European Time
                            { text: 'EET', value: 'EET' },   // Eastern European Time
                            { text: 'JST', value: 'JST' },   // Japan Standard Time
                            { text: 'BST', value: 'BST' },   // British Summer Time
                            { text: 'HKT', value: 'HKT' },   // Hong Kong Time
                            { text: 'SGT', value: 'SGT' },   // Singapore Time
                            { text: 'AEDT', value: 'AEDT' }, // Australian Eastern Daylight Time
                            { text: 'AEST', value: 'AEST' }, // Australian Eastern Standard Time
                            { text: 'NZDT', value: 'NZDT' }, // New Zealand Daylight Time
                            { text: 'ART', value: 'ART' },   // Argentina Time
                            { text: 'AKST', value: 'AKST' }, // Alaska Standard Time
                            { text: 'AST', value: 'AST' },   // Atlantic Standard Time
                            { text: 'WAT', value: 'WAT' }    // West Africa Time
                            // Add other time zones as needed
                        ]
                    }
                }
            };
        }

        getTime(args) {
            const timeZone = args.TIMEZONE;
            const offset = args.OFFSET;

            // Define a map of time zones to their UTC offsets
            const timeZones = {
                'GMT': 0,
                'UTC': 0,
                'EST': -5,   // Eastern Standard Time (UTC-5)
                'PST': -8,   // Pacific Standard Time (UTC-8)
                'CST': -6,   // Central Standard Time (UTC-6)
                'MST': -7,   // Mountain Standard Time (UTC-7)
                'IST': 5.5,  // Indian Standard Time (UTC+5:30)
                'CET': 1,    // Central European Time (UTC+1)
                'EET': 2,    // Eastern European Time (UTC+2)
                'JST': 9,    // Japan Standard Time (UTC+9)
                'BST': 1,    // British Summer Time (UTC+1)
                'HKT': 8,    // Hong Kong Time (UTC+8)
                'SGT': 8,    // Singapore Time (UTC+8)
                'AEDT': 11,  // Australian Eastern Daylight Time (UTC+11)
                'AEST': 10,  // Australian Eastern Standard Time (UTC+10)
                'NZDT': 13,  // New Zealand Daylight Time (UTC+13)
                'ART': -3,   // Argentina Time (UTC-3)
                'AKST': -9,  // Alaska Standard Time (UTC-9)
                'AST': -4,   // Atlantic Standard Time (UTC-4)
                'WAT': 1     // West Africa Time (UTC+1)
                // Add other time zones as needed
            };

            if (!(timeZone in timeZones)) {
                return 'Invalid Time Zone';
            }

            const utcOffset = timeZones[timeZone];
            const totalOffset = utcOffset + offset;

            // Get the current UTC time and apply the total offset
            const currentTime = new Date();
            const localTime = new Date(currentTime.getTime() + totalOffset * 3600 * 1000);

            // Format the time as 'HH:MM:SS'
            const hours = String(localTime.getUTCHours()).padStart(2, '0');
            const minutes = String(localTime.getUTCMinutes()).padStart(2, '0');
            const seconds = String(localTime.getUTCSeconds()).padStart(2, '0');

            return `${hours}:${minutes}:${seconds}`;
        }
    }

    Scratch.extensions.register(new 
