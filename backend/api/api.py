import uvicorn
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Inputs(BaseModel):
    inp1: int
    inp2: str

@app.get("/teste")
def example() -> str:
    return "Hello World!"

@app.post("/teste2")
def exemple_2(inputs: Inputs) -> str:
    #...
    return inputs.inp2

if __name__ == "__main__":
    uvicorn.run(app, port=8000)
    