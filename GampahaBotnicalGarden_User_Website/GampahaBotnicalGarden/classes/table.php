<?php
class Table{
	public $currentTable;

	function __construct($currentTable){
		$this->currentTable=$currentTable;
	}
	
	function saveInDatabase($credentials, $primary=''){
		try{
			$this->insertInDatabase($credentials);
		}
		catch(Exception $err){
			$this->updateInDatabase($credentials, $primary);
		}
	}

	function insertInDatabase($credentials){
		global $pdo;
		$pieces= array_keys($credentials);
		$rowValues=implode(',', $pieces); 
		$rowValuesWithColon= implode(', :', $pieces);
		$databaseQuery= 'INSERT INTO '.$this->currentTable.'('.$rowValues.') VALUES(:'.$rowValuesWithColon.')';//database query
		$selectprpstmt= $pdo->prepare($databaseQuery);
		$selectprpstmt->execute($credentials);
	}

	function updateInDatabase($credentials, $primary){
		global $pdo;
		$pieces=[];
		foreach ($credentials as $key => $value) {
			$pieces[]=$key.'= :'.$key; 
		}
		$piecesWithComma= implode(', ', $pieces);
		$databaseQuery="UPDATE $this->currentTable SET $piecesWithComma WHERE $primary=:primary";
		$credentials['primary']=$credentials[$primary];
		$selectprpstmt=$pdo->prepare($databaseQuery);
		$selectprpstmt->execute($credentials); 
	}

	function findInDatabase($column, $value){
		global $pdo;
		$selectprpstmt=$pdo->prepare('SELECT * FROM '.$this->currentTable.' WHERE '.$column.'=:value');
		$credentials=[
			'value'=>$value
		];
		$selectprpstmt->execute($credentials);
		return $selectprpstmt;
	}

	function findAllInDatabase(){
		global $pdo;
		$selectprpstmt=$pdo->prepare("SELECT * FROM ".$this->currentTable);
		$selectprpstmt->execute();
		return $selectprpstmt;
	}

	function deleteFromDatabase($column, $value){
		global $pdo;
		$selectprpstmt=$pdo->prepare("DELETE FROM $this->currentTable WHERE $column = :value");
		$credentials=[
			'value'=>$value
		];
		$selectprpstmt->execute($credentials);
		return $selectprpstmt;
	}

	function getLastInsertId(){
		global $pdo;
		$lastInsertId = $pdo->lastInsertId();
		return $lastInsertId;
	}
	
	
}
