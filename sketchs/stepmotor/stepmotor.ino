#include <AFMotor.h>
 
 
AF_Stepper motor(48, 1);
 
 
void setup() {
  Serial.begin(9600);           // set up Serial library at 9600 bps
  Serial.println("Stepper test!");
 
  motor.setSpeed(10);  // 10 rpm   
 
  motor.step(100, FORWARD, SINGLE); 
  motor.release();
  delay(1000);
}
 
void loop() {
    motor.release();
  for(int i = 0; i < 5000 ;i++){
    delay(100);
    motor.step(10, FORWARD, SINGLE); 
  }
   motor.release();
  delay(1000);
  for(int i = 0; i < 5000 ;i++){
    delay(100);
    motor.step(10, BACKWARD, SINGLE); 
  }
  //
//  
// 
delay(100);
//motor.step(100, BACKWARD, DOUBLE); 
//  motor.step(100, BACKWARD, DOUBLE);
// 
//  motor.step(100, FORWARD, INTERLEAVE); 
//  motor.step(100, BACKWARD, INTERLEAVE); 
// 
//  motor.step(100, FORWARD, MICROSTEP); 
//  motor.step(100, BACKWARD, MICROSTEP); 
}
